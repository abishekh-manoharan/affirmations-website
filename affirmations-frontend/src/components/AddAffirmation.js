import React from 'react';
import plus from '../images/plus.svg'

function AddAffirmation(props) {
    return (
        <button id="affirmation-add">
            <img src={plus} id="affirmation-add-plus-icon" />
            <div>
                Add affirmation
            </div>
        </button>
    );
}

export default AddAffirmation;