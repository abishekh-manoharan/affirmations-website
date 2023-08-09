import React, { useEffect, useState } from 'react';

function Affirmation({ content, author, id }) {
    const overLayMenuID = `affirmation-overlay-menu-${id}`

    useEffect(()=>{
        document.addEventListener('click', (e2)=>{ 
            const settingsBtn = document.getElementById("affirmation-settings-btn"+id)
            
            //if the element that was clicked was not a descendent of the settings button, close the sub menu 
            if(!settingsBtn.contains(e2.target)){
                document.getElementById(overLayMenuID).style = "display:none;"
            }
        })
    }, [])

    const settingsBtnClickHandler = (e1) => {
        //opening menu
        document.getElementById(overLayMenuID).style = "display:flex;"
    }


    return (
        <div className="affirmation-all">
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
                <div className='affirmation-settings-btn affirmation-value' id={"affirmation-settings-btn"+id} onClick={settingsBtnClickHandler}>
                    ...
                    <div className="affirmation-overlay-menu" id={overLayMenuID}>
                        <div className="affirmation-overlay-menu-option">
                            Option1
                        </div>
                        <div className="affirmation-overlay-menu-option">
                            Option2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Affirmation;