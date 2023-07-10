import React from 'react';

function SetAffirmationsList({setMainContentToShowID, id}) {
    
    // handlers
    const handleReturnBtnClick = () => {
        setMainContentToShowID({'content':'sets', 'id': null})
    }
    
    return (
        <div>
            set affirmations list 
            id: {id}
            <button onClick={handleReturnBtnClick}>return</button>
        </div>
    );
}

export default SetAffirmationsList;