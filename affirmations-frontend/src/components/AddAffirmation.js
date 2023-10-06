import React, { useEffect, useState } from 'react';
import plus from '../images/plus.svg'
import AddAffirmationMenu from './AddAffirmationMenu';

function AddAffirmation({ set, updateAffirmations }) {
    const [showAddMenu, setShowAddMenu] = useState(false)

    const addAffirmationMenuId = "affirmation-menu-id-" + set.id

    useEffect(() => {
        console.log('addaffirmation menu setid')
        console.log(set.id)
    }, [])
    
    //handlers
    const handleAddBtnClick = (e) => {
        e.stopPropagation()       
        setShowAddMenu(true)
        console.log('click');
    }

    return (
        <>
            {/* add affirmation button  */}
            <button id="affirmation-add" onClick={handleAddBtnClick}>
                <img src={plus} id="affirmation-add-plus-icon" />
                <div>
                    Add affirmation
                </div>
            </button>
            {showAddMenu ?
                <AddAffirmationMenu updateAffirmations={updateAffirmations} setShowAddMenu={setShowAddMenu} addAffirmationMenuId={addAffirmationMenuId} set={set}/> :
                <></>
            }
        </>
    );
}

export default AddAffirmation;

