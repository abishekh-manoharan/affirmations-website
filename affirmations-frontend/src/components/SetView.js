import React, { useEffect, useState } from 'react';
import EditWallpaper from './EditWallpaper';
import Affirmation from './Affirmation';
import AddAffirmation from './AddAffirmation';
import dataAccess from '../services/dataAccess';
import playLogo from '../images/play-logo.svg'
import settingsLogo from '../images/settings-logo.svg'
import confirmLogo from '../images/confirm-logo.svg'
import xLogo from '../images/x-logo.svg'
import editLogo from '../images/edit-logo.svg'
import wallpaper1 from '../images/wallpaper-1.jpeg'
import wallpaper2 from '../images/wallpaper-2.jpeg'
import arrowLeft from '../images/arrow-left.svg'

// import wallpaper3 from '../images/wallpaper-3.jpeg'

function SetView({ setMainContentToShowID, id, Name, set }) {
    const [affirmations, setAffirmations] = useState([])
    const [name, setName] = useState(Name)
    const [wallpaperID, setWallpaperID] = useState(set.wallpaperID)
    const [editMode, setEditMode] = useState(false)
    const [editWallpaperMode, setEditWallpaperMode] = useState(false)
    const [affirmationsLengthOverZero, setAffirmationsLengthOverZero] = useState(true)

    // side effects
    useEffect(() => {
        updateAffirmations()
    }, [])

    // helpers
    const updateAffirmations = () => {
        dataAccess
            .getAllAffirmationsOfSet(1, id)
            .then(res => {              
                setAffirmations(res)
                // set state depending on if there are any affirmations in the set. this is to set the play button accordingly
                if (res.length > 0) {
                    setAffirmationsLengthOverZero(true)
                }
                else {
                    setAffirmationsLengthOverZero(false)
                }
            })
            .catch(err=>console.log(err))
    }

    // handlers
    const handleReturnBtnClick = () => {
        setMainContentToShowID({ 'content': 'sets', 'id': null })
    }
    const handleEditModeButtonClick = () => {
        setEditMode(true)
    }
    const handleEditWallpaperButtonClick = () => {
        setEditWallpaperMode(!editWallpaperMode)
    }
    const handleEditSubmit = () => {
        const updatedSet = {
            ...set,
            'Name': name,
            'dateUpdated': new Date().toISOString(),
            'wallpaperID': wallpaperID
        }

        dataAccess.editSet(updatedSet)
        setEditMode(false)
        setMainContentToShowID({ 'content': 'set', 'id': id, 'set': updatedSet, 'affirmations': null })

        console.log(updatedSet);
    }
    const handleEditCancel = () => {
        setEditMode(false)
        setWallpaperID(set.wallpaperID)
        setName(set.Name)
    }
    const handlePlayClick = () => {
        setMainContentToShowID({ 'content': 'playSet', 'id': id, 'set': set, 'affirmations': affirmations, 'wallpaperID': wallpaperID })
    }

    // setting appropriate background
    let wallpaperToDisplay = ''
    switch (wallpaperID) {
        case ('1'):
            wallpaperToDisplay = <img src={wallpaper1} class="header-background" />
            break;
        case ('2'):
            wallpaperToDisplay = <img src={wallpaper2} class="header-background" />
            break;
    }


    return (
        <div>
            <button class="play-display-close-btn" value="close" onClick={handleReturnBtnClick}>
                <img src={arrowLeft} />
            </button>
            <div class="header">
                {editMode ?
                    <div style={{ position: 'relative', width: 100 + 'vw' }}>
                        <input type='text' class="header-name" style={{ fontSize: 60 + 'px' }} onChange={(e) => { setName(e.target.value) }} value={name} />
                        <img src={editLogo} alt="confirm" class="wallpaper-logo" onClick={handleEditWallpaperButtonClick} />
                        {editWallpaperMode
                            ?
                            <EditWallpaper setWallpaperID={setWallpaperID} wallpaperID={wallpaperID} defaultWallpaperID={set.wallpaperID} setEditWallpaperMode={setEditWallpaperMode} />
                            : <></>
                        }
                    </div>
                    :
                    <div class="header-name" style={{ fontSize: 60 + 'px' }}>{name}</div>
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
                                {affirmationsLengthOverZero ? // remove play function if there are no affirmations 
                                    <img src={playLogo} alt="play" class="play-img" onClick={handlePlayClick} /> :
                                    <img src={playLogo} alt="play" class="play-img" /> 
                                }
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
            {/*             
            <div class="list-options-bar">
                <div class="sort-by">Sort By</div>
                <div class="search">Search</div>
            </div> */}


            {/* affitmations table header*/}
            <AddAffirmation set={set} updateAffirmations={updateAffirmations} />
            <div className="affirmation affirmation-header">
                <div className='affirmation-number affirmation-header-value'>
                    #
                </div>
                <div className='affirmation-content affirmation-header-value'>
                    Passage
                </div>
                <div className='affirmation-author affirmation-header-value'>
                    Author
                </div>
                <div className='affirmation-settings-btn affirmation-header-value'>
                    Settings
                </div>
            </div>

            {affirmations.map(e => {
                console.log('e');
                console.log(e);
                return <Affirmation affirmation={e} content={e.content} author={e.author} id={e.id} updateAffirmations={updateAffirmations} />
            }
            )}
        </div>
    );
}

export default SetView;