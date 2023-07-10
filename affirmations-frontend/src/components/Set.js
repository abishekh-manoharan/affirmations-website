import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import dataAccess from '../services/dataAccess';

function Set({ set, setSets, setMainContentToShowID}) {
    //states
    const [contentToShowID, setContentToShowID] = useState('setInfo')
    const [name, setName] = useState(set.Name)
    const [setState, setSet] = useState(set)


    /* HANDLERS  */
    // handler to open edit UI
    const editSetClickHandler = (e, set) => {
        console.log('--edit clicked')
        setContentToShowID('edit')
    }
    // handler for submitting edited name
    const editSubmitBtnClickHandler = (e, set) => {
        set = { ...set, "Name": name }
        // setSet(set)
        dataAccess
            .editSet(set)
            .then(() => {
                setContentToShowID('setInfo')
                setSet(set)
            })
    }
    // handler for clicking the delete button 
    const deleteBtnClickHandler = (e, set) => {
        const id = set.setID
        dataAccess.deleteSet(id)
            .then(res=>{
                console.log(res)
                setSets(res)
            })
    }

    // setting content to show
    let contentToShow = ''
    if (contentToShowID === 'setInfo') {
        contentToShow =
            <div onClick={(e)=>setMainContentToShowID({'content':'set', 'id': setState.setID})}className="set-item">
                <button onClick={(e) => { editSetClickHandler(e, set) }} class="edit-set-btn" name="edit">Edit</button>
                <div className="set-name">
                    {setState.Name}
                </div>
                <div className="set-quantity">
                    {setState.Quantity}
                </div>
                <div className="set-date">
                    {new Date(setState.dateUpdated).toDateString()}
                </div>
            </div>
    }
    else if (contentToShowID === 'edit') {
        contentToShow =
            <div className="set-item">
                <form onSubmit={(e) => e.preventDefault()} className="add-set-set">
                    <label className="nameLabel" htmlFor="name">Name:</label>
                    <input className="nameInput" onChange={(e) => { setName(e.target.value) }} type='text' name="name" value={name} />
                    <input className="submitNameBtn" type="button" onClick={(e) => editSubmitBtnClickHandler(e, set)} value="Edit" />
                    <input className="deleteBtn" type="button" onClick={(e) => deleteBtnClickHandler(e, set)} value="Delete" />
                    <input className="closeFormBtn" type="button" onClick={() => { setContentToShowID('setInfo') }} value="Cancel" />
                </form>
            </div>
    }


    return (
        <>
            {contentToShow}
        </>
    );
}

export default Set;