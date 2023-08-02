import React, { useState } from 'react';

function Affirmation({ content, author }) {
    const [hover, setHover] = useState(false)

    return (
        <div className="affirmation">
            <div className='affirmation-number affirmation-value'>
                1
            </div>
            <div className='affirmation-content affirmation-value'>
                {content}
            </div>
            <div className='affirmation-author affirmation-value'>
                <i>{author}</i>
            </div>                        
            <div className='affirmation-settings-btn affirmation-value'>
                ...
            </div>      
        </div>
    );
}

export default Affirmation;