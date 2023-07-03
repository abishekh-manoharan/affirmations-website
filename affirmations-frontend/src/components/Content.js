import React from 'react';
import { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess'
import plus from '../images/plus.svg'

function Content(props) {
    const [sets, setSets] = useState([])
    const [name, setName] = useState('test')
    const [addSetContent, setAddSetContent] = useState('plusSign')

    // side effects
    useEffect(() => { console.log('NAME ' + name) })
    useEffect(() => {
        dataAccess
            .getAllSets()
            .then(res => setSets(res))
    }, [])


    // handlers
    const nameChangeHandler = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const clickAddButtonHandler = (e) => {
        console.log('clicked add')
        setAddSetContent('addForm')
    }

    const cancelButtonClickHandler = (e) => {
        setAddSetContent('plusSign')
    }

    const addButtonClickHandler = (e) => {
        console.log(name)
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
            <form class="add-set-set">
                <input onChange={nameChangeHandler} type='text' /> <br />
                <input type="button" onClick={() => console.log(name)} value="Add" />
                <input type="button" onClick={cancelButtonClickHandler} value="Cancel" />
            </form>
        </div>
    }

    return (
        <>
            {name}
            <div className="sets-flex">
                { addContent }
                {
                    sets.map((set) =>
                        <div className="set-item">
                            <div className="set-name">
                                {set.Name}
                            </div>
                            <div className="set-quantity">
                                {set.Quantity}
                            </div>
                            <div className="set-date">
                                {new Date(set.dateUpdated).toDateString()}
                            </div>
                        </div>)
                }
            </div>
        </>
    );
}

export default Content;