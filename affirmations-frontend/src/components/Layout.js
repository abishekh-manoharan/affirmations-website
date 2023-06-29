import React from 'react';
import HeaderBar from './HeaderBar';
import Content from './Content';

function Layout(props) {
    return (
        <div>
            <HeaderBar />
            <Content />
        </div>
    );
}

export default Layout;