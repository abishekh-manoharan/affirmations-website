import React, { useEffect, useState } from 'react';
import backLogo from '../images/playview-back-logo.svg'
import forwardLogo from '../images/playview-forward-logo.svg'
import playLogo from '../images/playview-play-logo.svg'
import pauseLogo from '../images/playview-pause-logo.svg'

function PlayView({ affirmations, setMainContentToShowID, id, set }) {
    const [affirmationNumber, setAffirmationNumber] = useState(0)
    const [timeInterval, setTimeInterval] = useState(1000)
    const [playing, setPlaying] = useState(true)
    const [timeout, setTimeoutState] = useState(null)

    useEffect(()=>{
        if(playing){
            const timeoutc = setTimeout(() => { // set timeout to go to next affirmation when state of playing, timeInterval, affirmationNumber changes
                if (affirmationNumber >= affirmations.length - 1) setAffirmationNumber(0) // go back to beginning when last affirmation is reached
                else setAffirmationNumber(affirmationNumber + 1)
            }, timeInterval)
            setTimeoutState(timeoutc) // store timeout id as a state to cancel timeout when needed
        }        
    }, [playing, timeInterval, affirmationNumber])

    const closeClickHandler = () => {
        setMainContentToShowID({ 'content': 'set', 'id': id, 'set': set })
    }
    const playClickHandler = () => {
        clearTimeout(timeout) // stop from proceeding to next affirmation
        setPlaying(!playing)
    }
    return (
        <div className="play-display">
            <button id="play-display-close-btn" value="close" onClick={closeClickHandler}>
                X
            </button>
            <div className="play-content">
                {affirmations[affirmationNumber].content}
            </div>
            <div className="play-author">{affirmations[affirmationNumber].author}</div>
            <div className="play-controls">
                <div className="centered-element">
                    <img className="play-controls-prev " src={backLogo}/>
                    {playing ?
                        <img className="play-controls-pause" onClick={playClickHandler} src={pauseLogo}/> :
                        <img className="play-controls-play" onClick={playClickHandler} src={playLogo}/>
                    }
                    <img className="play-controls-next" src={forwardLogo}/>
                </div>
                <div className="play-controls-speed"> Speed </div>
            </div>
        </div>
    );
}

export default PlayView;