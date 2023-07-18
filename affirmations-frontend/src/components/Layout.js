import React, { useState } from 'react';
import HeaderBar from './HeaderBar';
import Sets from './Sets';
import SetView from './SetView';

function Layout(props) {
    const [mainContentToShowID, setMainContentToShowID] = useState({'content':'sets', 'id': null, 'set': null})

    let contentToShow = ''
    if(mainContentToShowID.content==='sets'){
        contentToShow=<Sets setMainContentToShowID={setMainContentToShowID}/>
    }
    else if(mainContentToShowID.content==='set'){
        contentToShow=<SetView id={mainContentToShowID.id} wallpaperID={mainContentToShowID.set.wallpaperID} setMainContentToShowID={setMainContentToShowID} Name={mainContentToShowID.set.Name} set={mainContentToShowID.set}/>
    }
    
    return (
        <div>
            <HeaderBar />
            {contentToShow}
        </div>
    );
}

export default Layout;