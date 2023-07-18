import React, { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess';
import playLogo from '../images/play-logo.svg'
import settingsLogo from '../images/settings-logo.svg'
import confirmLogo from '../images/confirm-logo.svg'
import xLogo from '../images/x-logo.svg'
import editLogo from '../images/edit-logo.svg'
import wallpaper1 from '../images/wallpaper-1.jpeg'
import wallpaper2 from '../images/wallpaper-2.jpeg'
// import wallpaper3 from '../images/wallpaper-3.jpeg'

function SetView({ setMainContentToShowID, id, Name, set }) {
    const [affirmations, setAffirmations] = useState([])
    const [name, setName] = useState(Name)
    const [wallpaperID, setWallpaperID] = useState(set.wallpaperID)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        dataAccess
            .getAllAffirmationsOfSet(1, id)
            .then(res => {
                console.log('res from getAllAffirmationsOfSet: ' + res)
                console.log('typeof res from getAllAffirmationsOfSet: ' + typeof (res))
                setAffirmations(res)
            })
    }, [])

    // handlers
    const handleReturnBtnClick = () => {
        setMainContentToShowID({ 'content': 'sets', 'id': null })
    }
    const handleEditModeButtonClick = () => {
        setEditMode(true)
    }
    const handleEditSubmit = () => {
        const updatedSet = {
            ...set,
            'Name': name,
            'dateUpdated': new Date().toISOString(),
            'wallpaperID': wallpaperID
        }

        setEditMode(false)
        setName(set.Name)

        console.log(updatedSet);
    }
    const handleEditCancel = () => {
        setEditMode(false)
        setName(set.Name)
    }

    // setting appropriate background
    let wallpaperToDisplay = ''
    switch (set.wallpaperID) {
        case ('1'):
            wallpaperToDisplay = <img src={wallpaper1} class="header-background" />
            break;
        case ('2'):
            wallpaperToDisplay = <img src={wallpaper2} class="header-background" />
            break;
    }


    return (
        <div>
            <div class="header">
                {editMode ?
                    <div style={{ position: 'relative', width: 100 + 'vw' }}>
                        <input type='text' class="header-name" style={{ fontSize: 60 + 'px' }} onChange={(e) => { setName(e.target.value) }} value={name} />
                        <img src={editLogo} alt="confirm" class="wallpaper-logo" onClick={handleEditSubmit} />
                    </div>
                    :
                    <div class="header-name" style={{ fontSize: 60 + 'px' }}>{Name}</div>
                }
                <div class="header-options">
                    {editMode ?
                        <>
                            <div class="header-option" style={{ backgroundColor: 'rgba(144, 254, 147, 0.300)' }}>
                                <img src={confirmLogo} style={{ left: 0 + 'px' }} alt="confirm" class="play-img" onClick={handleEditSubmit} />
                                {/* <img src={confirmLogo} style={{left:0+'px', backgroundColor:'lightgreen'}} alt="confirm" class="play-img" onClick={handleEditSubmit}/> */}
                                Confirm
                            </div>
                            <div class="header-option" style={{ backgroundColor: 'rgba(254, 151, 144, 0.300)' }}>
                                <img src={xLogo} style={{ left: 0 + 'px' }} alt="cancel" class="play-img" onClick={handleEditCancel} />
                                Cancel
                            </div>
                        </>
                        :
                        <>
                            <div class="header-option">
                                <img src={playLogo} alt="play" class="play-img" />
                                Play Set
                            </div>
                            <div class="header-option">
                                <img src={settingsLogo} alt="setting" class="settings-img" onClick={handleEditModeButtonClick} />
                                Edit Set
                            </div>
                        </>

                    }
                </div>
                {wallpaperToDisplay}
            </div>

            <button onClick={handleReturnBtnClick}>return</button>

            <div class="list-options-bar">
                <div class="sort-by">Sort By</div>
                <div class="search">Search</div>
            </div>

            {affirmations.map(e => {
                return (
                    <>
                        <p>{e.affirmationID}</p>
                        <p>{e.content}</p>
                        <p></p>
                    </>
                )
            }
            )}
        </div>
    );
}

export default SetView;