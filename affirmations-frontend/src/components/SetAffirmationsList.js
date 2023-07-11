import React, { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess';

function SetAffirmationsList({ setMainContentToShowID, id }) {
    const [affirmations, setAffirmations] = useState([])

    useEffect(() => {
        dataAccess
            .getAllAffirmationsOfSet(1, id)
            .then(res => {
                console.log('res from getAllAffirmationsOfSet: ' + res)
                console.log('typeof res from getAllAffirmationsOfSet: ' + typeof(res))
                setAffirmations(res)
            })
    }, [])

    // handlers
    const handleReturnBtnClick = () => {
        setMainContentToShowID({ 'content': 'sets', 'id': null })
    }

    return (
        <div>
            set affirmations list
            id: {id}
            <button onClick={handleReturnBtnClick}>return</button>
            <br></br>
            <br></br>

            {affirmations.map(e => {
            return (
                <>
                    <p>{e.affirmationID}</p>
                    <p>{e.content}</p>
                    <p></p>
                </>
            )}
            )}
        </div>
    );
}

export default SetAffirmationsList;