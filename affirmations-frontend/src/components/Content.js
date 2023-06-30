import React from 'react';
import { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess'

function Content(props) {
    const [sets, setSets] = useState([])

    useEffect(() => {
        dataAccess
            .getAllSets()
            .then(res => setSets(res))
    }, [])

    return (
        <div class="sets-flex">
        {
            sets.map((set) =>
                <div class="set-item">{set.setID} {set.Name} {set.Description} {set.Quantity} {set.dateUpdated} </div>)
        }
        </div>
    );
}

export default Content;