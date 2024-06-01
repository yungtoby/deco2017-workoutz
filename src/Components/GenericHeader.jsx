import React from 'react';
import main_header from '../Images/main_header.png'

function GenericHeader() {
    return(
        <div className="homePageHeader">
            <img src={main_header} />
        </div>
    )
}

export default GenericHeader;