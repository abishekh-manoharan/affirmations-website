import React, { useEffect, useState } from 'react';
import EditMenu from './EditMenu';
import DeleteAffirmationConfirmation from './DeleteAffirmationConfirmation';

function Affirmation({ affirmation, content, author, id, updateAffirmations }) {
    
    const overLayMenuID = `affirmation-overlay-menu-${id}`
    const editMenuID = `affirmation-edit-menu-${id}`
    const deleteMenuID = `affirmation-delete-menu-${id}`
    const editMenuEditOptionID = `affirmation-overlay-menu-option-edit-${id}`
    const deleteMenuOptionID = `affirmation-overlay-menu-option-delete-${id}`
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
            document.getElementById(editMenuID).style.display = "block"
            e.stopPropagation()
        }

        const clickDeleteOptionListener = (e) => {
            console.log('delete clicked');
            document.getElementById(overLayMenuID).style.display = "none"
            document.getElementById(deleteMenuID).style.display = "block"
            e.stopPropagation()
        }
        //handler for clicking settings button
        const clickSettingsBtnHandler = (e) => {
            console.log('settings clicked');
            document.getElementById(overLayMenuID).style.display = "flex"
        }

        // add event listeners
        const editBtn = document.getElementById(editMenuEditOptionID)
        const deleteBtn = document.getElementById(deleteMenuOptionID)
        const settingsBtn = document.getElementById(settingsBtnID)

        editBtn.addEventListener('click', clickEditOptionListener)
        deleteBtn.addEventListener('click', clickDeleteOptionListener)
        settingsBtn.addEventListener('click', clickSettingsBtnHandler)
        document.addEventListener('click', clickOutsideListener)

        // on dismount, remove the listeners
        return () => {
            editBtn.removeEventListener('click', clickEditOptionListener)
            deleteBtn.removeEventListener('click', clickDeleteOptionListener)
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
                        <div className="affirmation-overlay-menu-option" id={deleteMenuOptionID}>
                            Delete
                        </div>
                    </div>
                </div>
            </div>
            <EditMenu affirmation={affirmation} editMenuID={editMenuID} content={content} author={author} id={id} updateAffirmations={updateAffirmations}/>
            <DeleteAffirmationConfirmation affirmation={affirmation}  content={content} deleteMenuID={deleteMenuID} id={id} updateAffirmations={updateAffirmations}/>
        </div>
    );
}

export default Affirmation;