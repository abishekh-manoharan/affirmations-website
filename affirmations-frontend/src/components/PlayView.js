import React from 'react';

function PlayView(props) {
    return (
        <div className="play-display">
            <button id="play-display-close-btn" value="close">
                X
            </button>
            <div className="play-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </div>
            <div className="play-author">Lauren Opposum</div>
            <div className="play-controls">
                <div className="centered-element">
                    <div className="play-controls-next "> Next </div>
                    <div className="play-controls-play "> Play </div>
                    <div className="play-controls-prev "> Previous </div>
                </div>
                <div className="play-controls-speed"> Speed </div>
            </div>
        </div>
    );
}

export default PlayView;