import React, { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess';


function AddAffirmationMenu({addAffirmationMenuId, setShowAddMenu, set, updateAffirmations}) {
    const [authorValue, setAuthorValue] = useState('')
    const [contentValue, setContentValue] = useState('')

    useEffect(()=>{ 
        // if you click outside of the component, hide the form
        const clickOutsideHandler = (e) => { 
            const menu = document.getElementById(addAffirmationMenuId)                
            
            if(!menu.contains(e.target)){
                setShowAddMenu(false)
            }       
        }

        document.addEventListener('click', clickOutsideHandler)
        return () => {
            document.removeEventListener('click', clickOutsideHandler)
            console.log("removed handler");
        }
    }, [])


    const handleSubmitBtnClick = () => {       
        const newAffirmation = {
            "userID": 1,            
            "setID": set.id,
            "content": contentValue,
            "author": authorValue,
            "style": "default"
        }

        dataAccess.addNewAffirmation(newAffirmation).then(res=>{
            updateAffirmations()
            setShowAddMenu(false)
        })
    }
    const handleCancelBtnClick = () => {
        setShowAddMenu(false)
    }
    
    return (
        <div>
             {/* // add affirmation overlay menu */}
             <div class="affirmation-menu" id={addAffirmationMenuId} style={{ display: 'block'}}>
                <div class="affirmation-menu-header">
                    Add Affirmation
                </div>

                <div class="form">
                    <div class="affirmation-edit-menu-input-label">
                        Author
                    </div>
                    <input class="affirmation-edit-menu-input" type='text' value={authorValue} onChange={(e) => { setAuthorValue(e.target.value) }}>

                    </input>
                    <div class="affirmation-edit-menu-input-label">
                        Content
                    </div>
                    {/* <input class="affirmation-edit-menu-input" type='text' value={content} onChange={(e)=>setContent(e.target.value)}/> */}
                    <input class="affirmation-edit-menu-input" type='text' value={contentValue} onChange={(e) => setContentValue(e.target.value)} />
                </div>
                <div class="affirmation-edit-menu-btns">
                    <button id="affirmation-edit-menu-submit-btn" class="affirmation-edit-menu-btn" onClick={handleSubmitBtnClick}>Submit</button>
                    <button id="affirmation-edit-menu-cancel-btn" class="affirmation-edit-menu-btn" onClick={handleCancelBtnClick}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AddAffirmationMenu;