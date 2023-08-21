import React, { useEffect, useState } from 'react';

function Affirmation({ content, author, id }) {
    const overLayMenuID = `affirmation-overlay-menu-${id}`
    const editMenuID = `affirmation-edit-menu-${id}`
    const editMenuEditOptionID = `affirmation-overlay-menu-option-edit-${id}`
    const settingsBtnID = `affirmation-settings-btn-${id}`


    useEffect(() => {
        // handler to manage clicking of the affirmation setting button and clicking outside of it
        const clickOutsideListener = (e2) => {
            const settingsBtn = document.getElementById(settingsBtnID)
            const editMenu = document.getElementById(editMenuID)
            const overlayMenu = document.getElementById(overLayMenuID)

            //if the element that was clicked was not a descendent of the settings button, close the sub menu 
            if (!settingsBtn.contains(e2.target)) {
                overlayMenu.style.display = "none"
            }

            if (!editMenu.contains(e2.target)) {
                editMenu.style.display = "none"
            }

        }
        //handler for clicking edit option
        const clickEditOptionListener = (e) => {
            console.log('edit clicked');
            document.getElementById(overLayMenuID).style.display = "none"
            document.getElementById(editMenuID).style.display = "flex"
            e.stopPropagation()
        }
        //handler for clicking settings button
        const clickSettingsBtnHandler = (e) => {
            console.log('settings clicked');
            document.getElementById(overLayMenuID).style.display = "flex"
        }

        // add event listeners
        const editBtn = document.getElementById(editMenuEditOptionID)
        const settingsBtn = document.getElementById(settingsBtnID)

        editBtn.addEventListener('click', clickEditOptionListener)
        settingsBtn.addEventListener('click', clickSettingsBtnHandler)
        document.addEventListener('click', clickOutsideListener)

        // on dismount, remove the listeners
        return () => {
            editBtn.removeEventListener('click', clickEditOptionListener)
            settingsBtn.removeEventListener('click', clickSettingsBtnHandler)
            document.removeEventListener('click', clickOutsideListener)
        }
    }, [])



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
                <div className='affirmation-settings-btn affirmation-value' id={settingsBtnID}>
                    ...
                    <div className="affirmation-overlay-menu" id={overLayMenuID}>
                        {/* <div className="affirmation-overlay-menu-option" onClick={editBtnClickHandler}> */}
                        <div className="affirmation-overlay-menu-option" id={editMenuEditOptionID}>
                            Edit
                        </div>
                        <div className="affirmation-overlay-menu-option">
                            Move to set
                        </div>
                        <div className="affirmation-overlay-menu-option">
                            Copy to set
                        </div>
                        <div className="affirmation-overlay-menu-option">
                            Delete
                        </div>
                    </div>
                </div>
            </div>

            <div class="affirmation-edit-menu" id={editMenuID}>
                Edit menu for {id}
            </div>
        </div>
    );
}

export default Affirmation;