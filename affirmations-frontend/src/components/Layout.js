import React, { useState } from 'react';
import HeaderBar from './HeaderBar';
import Sets from './Sets';
import SetView from './SetView';
import PlayView from './PlayView';

function Layout(props) {
    const [mainContentToShowID, setMainContentToShowID] = useState({'content':'sets', 'id': null, 'set': null, 'affirmations': null})

    let contentToShow = ''
    if(mainContentToShowID.content==='sets'){
        contentToShow=<Sets setMainContentToShowID={setMainContentToShowID}/>
    }
    else if(mainContentToShowID.content==='set'){
        contentToShow=<SetView id={mainContentToShowID.id} wallpaperID={mainContentToShowID.set.wallpaperID} setMainContentToShowID={setMainContentToShowID} Name={mainContentToShowID.set.Name} set={mainContentToShowID.set}/>
    }
    else if(mainContentToShowID.content==='playSet'){
        contentToShow=<PlayView setMainContentToShowID={setMainContentToShowID} affirmations={mainContentToShowID.affirmations} id={mainContentToShowID.id} set={mainContentToShowID.set} wallpaperID={mainContentToShowID.wallpaperID}/>
    }
    
    return (
        <div>
            {/* {mainContentToShowID.content !== 'playSet' ? <HeaderBar/> : <></>} */}
            {contentToShow}
        </div>
    );
}

export default Layout;