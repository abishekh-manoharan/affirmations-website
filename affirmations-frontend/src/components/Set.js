import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import dataAccess from '../services/dataAccess';
import wallpaper1 from '../images/wallpaper-1.jpeg'
import wallpaper2 from '../images/wallpaper-2.jpeg'

function Set({ set, setSets, setMainContentToShowID }) {    
    let wallpaper = ''
    if (set.wallpaperID === "1") { 
        wallpaper = <img src={wallpaper1} class='set-item-wallpaper'/>
    }
    else if (set.wallpaperID === "2") { 
        wallpaper = <img src={wallpaper2} class='set-item-wallpaper'/>
    }
    
    
    return (
        <div onClick={(e) => setMainContentToShowID({ 'content': 'set', 'id': set.setID, 'set': set})} className="set-item">
            {wallpaper}
            <div className="set-name">
                {set.Name}
            </div>
            <div className="set-quantity">
                {set.Quantity}
            </div>
            <div className="set-date">
                {new Date(set.dateUpdated).toDateString()}
            </div>
        </div>
    );
}

export default Set;