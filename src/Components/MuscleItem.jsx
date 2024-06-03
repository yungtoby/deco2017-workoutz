import React from 'react';
import { useState } from 'react';

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