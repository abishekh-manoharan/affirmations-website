import React, { useEffect, useState } from 'react';
import arrowLeft from '../images/arrow-left.svg'
import backLogo from '../images/playview-back-logo.svg'
import forwardLogo from '../images/playview-forward-logo.svg'
import playLogo from '../images/playview-play-logo.svg'
import pauseLogo from '../images/playview-pause-logo.svg'
import clockLogo from '../images/playview-clock-logo.svg'
import wallpaper1 from '../images/wallpaper-1.jpeg'
import wallpaper2 from '../images/wallpaper-2.jpeg'

function PlayView({ affirmations, setMainContentToShowID, id, set }) {
    const [affirmationNumber, setAffirmationNumber] = useState(0)
    const [timeInterval, setTimeInterval] = useState(2)
    const [timeIntervalInput, setTimeIntervalInput] = useState(2)
    const [playing, setPlaying] = useState(true)
    // const [timeout, setTimeoutState] = useState(null)

    useEffect(() => {
        let timeoutc = null;
        if (playing) {
            timeoutc = setTimeout(() => { // set timeout to go to next affirmation when state of playing, timeInterval, affirmationNumber changes
                if (affirmationNumber >= affirmations.length - 1) setAffirmationNumber(0) // go back to beginning when last affirmation is reached
                else setAffirmationNumber(affirmationNumber + 1)
            }, timeInterval * 1000)
            console.log('useEffect timeoutc:' + timeoutc);
            // setTimeoutState(timeoutc) // store timeout id as a state to cancel timeout when needed
        }

        return (() => { // cleanup to ensure timeout gets disposed on every rerender             
            clearTimeout(timeoutc)
        })
    }, [playing, timeInterval, affirmationNumber])

    const closeClickHandler = () => {
        setMainContentToShowID({ 'content': 'set', 'id': id, 'set': set })
    }
    const playClickHandler = () => {
        setPlaying(!playing)
    }
    const nextClickHandler = () => {
        if (affirmationNumber >= affirmations.length - 1) setAffirmationNumber(0) // go back to beginning when last affirmation is reached
        else setAffirmationNumber(affirmationNumber + 1)
    }
    const previousClickHandler = () => {
        if (affirmationNumber == 0) setAffirmationNumber(affirmations.length - 1) // go to end when click prev on first
        else setAffirmationNumber(affirmationNumber - 1)
    }
    const speedChangeHandler = (e) => {
        const newSpeed = Number(e.target.value)
        console.log(typeof (newSpeed));
        if (newSpeed) { // update speed only if there is a truthy input
            setTimeInterval(newSpeed)
            setTimeIntervalInput(newSpeed)
        }
        else {
            setTimeIntervalInput('')
        }
    }


    // specify wallpaper to show
    let wallpaperToShow = null
    switch (set.wallpaperID) {
        case "1":
            wallpaperToShow = <img class="play-wallpaper" src={wallpaper1} />
            break;
        case "2":
            wallpaperToShow = <img class="play-wallpaper" src={wallpaper2} />
            break;
        default:
            wallpaperToShow = <img class="play-wallpaper" src={wallpaper1} />
    }

    return (
        <div className="play-display">
            {wallpaperToShow}
            <button class="play-display-close-btn" value="close" onClick={closeClickHandler}>
                <img src={arrowLeft}/>
            </button>
            <div className="play-content">
                {affirmations[affirmationNumber].content}
            </div>
            <div className="play-author">{affirmations[affirmationNumber].author}</div>

            <div className="play-controls">
                <div className="centered-element">
                    <img className="play-controls-prev " onClick={previousClickHandler} src={backLogo} />
                    {playing ?
                        <img className="play-controls-play" onClick={playClickHandler} src={pauseLogo} /> :
                        <img className="play-controls-play" onClick={playClickHandler} src={playLogo} />
                    }
                    <img className="play-controls-next" onClick={nextClickHandler} src={forwardLogo} />
                </div>
                <div className="play-controls-speed">
                    <img className="play-controls-speed-logo" onClick={nextClickHandler} src={clockLogo} />
                    <input className="play-controls-speed-input" onChange={speedChangeHandler} value={timeIntervalInput} />
                </div>
            </div>
        </div>
    );
}

export default PlayView;