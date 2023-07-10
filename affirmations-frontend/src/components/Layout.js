import React, { useState } from 'react';
import HeaderBar from './HeaderBar';
import Sets from './Sets';
import SetAffirmationsList from './SetAffirmationsList';

function Layout(props) {
    const [mainContentToShowID, setMainContentToShowID] = useState({'content':'sets', 'id': null})

    let contentToShow = ''
    if(mainContentToShowID.content==='sets'){
        contentToShow=<Sets setMainContentToShowID={setMainContentToShowID}/>
    }
    else if(mainContentToShowID.content==='set'){
        contentToShow=<SetAffirmationsList id={mainContentToShowID.id} setMainContentToShowID={setMainContentToShowID}/>
    }
    
    return (
        <div>
            <HeaderBar />
            {contentToShow}
        </div>
    );
}

export default Layout;