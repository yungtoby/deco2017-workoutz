import React from 'react';
import { useState } from 'react';

/**
 * A function returning a singular JSX muscle item for use when 
 * picking muscle group in add exercises
 * @param {String} img_src - Source of the image of the muscle item
 * @returns MuscleItem JSX component
 */
function MuscleItem({img_src}){
    const [initClass, setClass] = useState("muscleItem");

    const toggleClassList = () => {
        {initClass === "muscleItem" ?  setClass("muscleItem selected") : setClass("muscleItem")}
    };

    return(
        <div onClick={toggleClassList} id="muscleItem" className={initClass}><img src={img_src} /></div>
    )
}

export default MuscleItem;