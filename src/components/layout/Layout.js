import React from 'react';

export const Layout = (props) => {
    return (
        <div className='min-vh-100 d-flex flex-column'>
            {props.children}
        </div>
    )
}

export default Layout;