import React, { useEffect, useState } from 'react';
import wallpaper1 from '../images/wallpaper-1.jpeg'
import wallpaper2 from '../images/wallpaper-2.jpeg'

function EditWallpaper({setWallpaperID, wallpaperID, defaultWallpaperID, setEditWallpaperMode}) {
    
    const [wallpaperIDToShow, setWallpaperIDToShow] = useState(wallpaperID) 

    useEffect(()=>{
        document.getElementById('edit-wallpaper-overlay-option-'+wallpaperID).style="box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.6);"
        // setWallpaperID(defaultWallpaperID)        
    }, [])

    const hoverOverWallpaperHandler = (e) => {
        console.log('hover over img');
        const id = e.target.id
        setWallpaperID(id.substring(id.length-1))        

        document.getElementById('edit-wallpaper-overlay-option-'+wallpaperIDToShow).style="box-shadow: 0;"
        document.getElementById(id).style="box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.6);"
    }

    const outOfWallpaperHandler = (e) => {
        console.log('hover out img');
        console.log(wallpaperIDToShow);
        setWallpaperID(wallpaperIDToShow)

        const id = e.target.id
        document.getElementById(id).style="box-shadow: 0;"
        document.getElementById('edit-wallpaper-overlay-option-'+wallpaperIDToShow).style="box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.6);"
    }
    
    const clickOptionHandler = (e) => {
        console.log('click img');
        const id = e.target.id
        setWallpaperID(id.substring(id.length-1))
        setWallpaperIDToShow(id.substring(id.length-1))     
        document.getElementsByClassName("edit-wallpaper-overlay-option").style="box-shadow: 0;"
        document.getElementById(id).style="box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.6);"           
        setEditWallpaperMode(false)
    }
    return (
        <div class="edit-wallpaper-overlay">
            <img src={wallpaper1} onMouseOver={hoverOverWallpaperHandler} onMouseOut={outOfWallpaperHandler} onClick={clickOptionHandler} class="edit-wallpaper-overlay-option" id="edit-wallpaper-overlay-option-1"/>
            <img src={wallpaper2} onMouseOver={hoverOverWallpaperHandler} onMouseOut={outOfWallpaperHandler} onClick={clickOptionHandler} class="edit-wallpaper-overlay-option" id="edit-wallpaper-overlay-option-2"/>
            <img src={wallpaper2} onMouseOver={hoverOverWallpaperHandler} onMouseOut={outOfWallpaperHandler} onClick={clickOptionHandler} class="edit-wallpaper-overlay-option" id="edit-wallpaper-overlay-option-3"/>
        </div>
    );
}

export default EditWallpaper;