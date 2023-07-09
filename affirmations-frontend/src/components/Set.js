import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import dataAccess from '../services/dataAccess';

function Set({ set, setSets }) {
    //states
    const [contentToShowID, setContentToShowID] = useState('setInfo')
    const [name, setName] = useState(set.Name)
    const [setState, setSet] = useState(set)


    /* HANDLERS  */
    // handler to edit existing set
    const editSetClickHandler = (e, set) => {
        console.log('--edit clicked')
        console.log(`e: ${e.target}`)
        console.log(`set: ${set.Name}`)

        setContentToShowID('edit')
    }

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

    // setting content to show
    let contentToShow = ''
    if (contentToShowID === 'setInfo') {
        contentToShow =
            <div className="set-item">
                <button onClick={(e) => { editSetClickHandler(e, set) }} name="edit">Edit</button>
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