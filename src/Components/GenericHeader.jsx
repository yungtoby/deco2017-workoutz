import React from 'react';
import main_header from '../Images/main_header.png'

/**
 * Component function returning a generic Header
 * @returns Generic Header JSX component
 */
function GenericHeader() {
    return(
        <div className="homePageHeader">
            <img src={main_header} />
        </div>
    )
}

export default GenericHeader;