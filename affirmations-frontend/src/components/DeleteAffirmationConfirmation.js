import React, { useEffect, useState } from 'react';
import dataAccess from '../services/dataAccess';

function DeleteAffirmationConfirmation({affirmation, content, deleteMenuID, updateAffirmations}) {
    const contentStyle = {
        "font-size": "small",
        "margin": "20px"
    }

    const messageStyle = {
        "margin": "20px"
    }

    const handleDeleteBtnClick = () => {
        dataAccess.deleteAffirmation(affirmation.id).then(res=>updateAffirmations())
        document.getElementById(deleteMenuID).style.display="none";
    }

    const handleCancelBtnClick = () => {
        document.getElementById(deleteMenuID).style.display="none";
    }
    return (
        <div class="affirmation-menu" id={deleteMenuID}>
            <div class="affirmation-menu-header">
                Delete
            </div>
            
            <div style={messageStyle}>
                Are you sure you want to delete this affirmation?:
            </div>

            <div style={contentStyle}>
                {content}
            </div>

            <div class="affirmation-edit-menu-btns">
                <button class="affirmation-edit-menu-btn" onClick={handleDeleteBtnClick}>Delete</button>
                <button class="affirmation-edit-menu-btn" onClick={handleCancelBtnClick}>Cancel</button>                
            </div>
        </div>
    );
}

export default DeleteAffirmationConfirmation;