import React from 'react';
import { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess'
import plus from '../images/plus.svg'
import Set from './Set';

function Sets({setMainContentToShowID}) {
    const [sets, setSets] = useState([])
    const [name, setName] = useState('')
    const [addSetContent, setAddSetContent] = useState('plusSign')

    // side effects
    useEffect(() => {
        dataAccess
            .getAllSets()
            .then(res => setSets(res))
    }, [])

    /***** handlers ******/
    // handler to update 'name' state in response to changes in the input element for name
    const nameChangeHandler = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }
    // handlers to change display of add set
    const clickAddButtonHandler = (e) => {
        console.log('clicked add')
        setAddSetContent('addForm')
    }
    const cancelButtonClickHandler = (e) => {
        setName('')
        setAddSetContent('plusSign')
    }
    // handler to add new set
    const addButtonClickHandler = (e) => {
        // creating js object for the new set        
        const newSet = {
            // "setID": Math.random() * 10000000000,
            "Name": name,
            "Quantity": 0,
            "dateUpdated": new Date().toISOString(),
            "dateCreated": new Date().toISOString(),
            "wallpaperID": "1"
        }
        
        console.log('\nnew set being added:')
        console.log(newSet);

        dataAccess.addSet(newSet);    // updating server
        setSets(sets.concat(newSet))    // updating sets UI
        setAddSetContent('plusSign')   // updating add sets component to go back to plus sign
        setName('') // resetting name
    }

    // choosing content for the add button
    let addContent = ''
    if (addSetContent === 'plusSign') {
        addContent = <div onClick={clickAddButtonHandler} className="set-item" >
            <div className="set-name">
                <img src={plus} />
            </div>
        </div>
    }
    else if (addSetContent === 'addForm') {
        addContent = <div className="set-item">
            <form className="add-set-set" onSubmit={(e)=>e.preventDefault()}>
                <label className="nameLabel" htmlFor="name">Name:</label>
                <input className="nameInput" onChange={nameChangeHandler} type='text' name="name" />
                <input className="submitNameBtn" type="button" onClick={addButtonClickHandler} value="Add" />
                <input className="closeFormBtn" type="button" onClick={cancelButtonClickHandler} value="Cancel" />
            </form>
        </div>
    }



    return (
        <>
            {name}
            <div className="sets-flex">
                {addContent}
                {
                    sets.map((set) =>
                        <Set setMainContentToShowID={setMainContentToShowID}key={set.setID} set={set} setSets={setSets}/>
                    )
                }
            </div>
        </>
    );
}

export default Sets;