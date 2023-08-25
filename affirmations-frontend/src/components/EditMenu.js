import React, { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess';

function EditMenu({ affirmation, editMenuID, author, setAuthor, content, setContent, id, updateAffirmations }) {
    const [authorValue, setAuthorValue] = useState(author);
    const [contentValue, setContentValue] = useState(content); 

    useEffect(()=>{
        // changing the state values back to their original values on dismount
        return () => {
            console.log('dismount');
            setAuthorValue(author)
            setContentValue(content)
        }
    }, [])
    

    const handleSubmitBtnClick = () => {
        const updatedAffirmation = {
            ...affirmation, 
            "content": contentValue,
            "author": authorValue,
        }

        // wait for db to update then update the state of affirmations based on DB 
        dataAccess.updateAffirmation(updatedAffirmation).then((res)=>{
            updateAffirmations()
        })        

        document.getElementById(editMenuID).style.display="none"
    }

    return (
        <div class="affirmation-edit-menu" id={editMenuID}>
            <div class="affirmation-edit-menu-header">
                Edit
            </div>

            <div class="form">
                <div class="affirmation-edit-menu-input-label">
                    Author
                </div>
                <input class="affirmation-edit-menu-input" type='text' value={authorValue} onChange={(e)=>{setAuthorValue(e.target.value)}}>

                </input>
                <div class="affirmation-edit-menu-input-label">
                    Content
                </div>
                {/* <input class="affirmation-edit-menu-input" type='text' value={content} onChange={(e)=>setContent(e.target.value)}/> */}
                <input class="affirmation-edit-menu-input" type='text' value={contentValue} onChange={(e)=>setContentValue(e.target.value)}/>
            </div>
            <div class="affirmation-edit-menu-btns">
                <button id="affirmation-edit-menu-submit-btn" class="affirmation-edit-menu-btn" onClick={handleSubmitBtnClick}>Submit</button>
                <button id="affirmation-edit-menu-cancel-btn" class="affirmation-edit-menu-btn">Cancel</button>                
            </div>
        </div>
    );
}

export default EditMenu;