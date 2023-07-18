import React, { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess';
import playLogo from '../images/play-logo.svg'
import settingsLogo from '../images/settings-logo.svg'
import wallpaper1 from '../images/wallpaper-1.jpeg'
import wallpaper2 from '../images/wallpaper-2.jpeg'
// import wallpaper3 from '../images/wallpaper-3.jpeg'

function SetView({ setMainContentToShowID, id, wallpaperID, Name}) {
    const [affirmations, setAffirmations] = useState([])

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


    // setting appropriate background
    let wallpaperToDisplay = ''
    switch(wallpaperID){
        case('1'):
            wallpaperToDisplay = <img src={wallpaper1} class="header-background" />
            break;
        case('2'):
            wallpaperToDisplay = <img src={wallpaper2} class="header-background" />
            break;
    }

    console.log(typeof(wallpaperID))

    return (
        <div>
            set affirmations list
            id: {id}
            wallpaperID: {wallpaperID}
            <button onClick={handleReturnBtnClick}>return</button>
            <br></br>
            <br></br>

            <div class="header">
                <div class="header-name" style={{ fontSize: 60 + 'px' }}>{Name}</div>
                <div class="header-options">
                    <div class="header-option">
                        <img src={playLogo} alt="play" class="play-img" />
                    </div>
                    <div class="header-option">
                        <img src={settingsLogo} alt="setting" class="settings-img" />
                    </div>
                </div>
                {wallpaperToDisplay}
            </div>

                
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