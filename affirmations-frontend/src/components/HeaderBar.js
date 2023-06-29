import React from 'react';

//importing images
import sunLogo from '../images/sun-logo.svg'
import userLogo from '../images/user-logo.svg'

function HeaderBar(props) {
    return (
        <div class="header-bar">
            <div class="header-logo"><img src={sunLogo}/></div>
            <div class="header-logo"><img src={userLogo}/></div>
        </div>
    );
}

export default HeaderBar;