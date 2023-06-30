import React from 'react';
import { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess'
import plus from '../images/plus.svg'

function Content(props) {
    const [sets, setSets] = useState([])

    useEffect(() => {
        dataAccess
            .getAllSets()
            .then(res => setSets(res))
    }, [])

    return (
        <div className="sets-flex">
            <div className="set-item" >
                <div className="set-name">
                    <img src={plus}/>
                </div>
            </div>
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
    );
}

export default Content;