import React from 'react';
import MuscleItem from './MuscleItem';

import '../Pages/NewWorkout.css'
import back_img from '../Images/back.png'


function NewExerciseDivMG({toggleAddMuscleGroup}) {
    
    return (
        <div className="newExerciseDiv">
            <p>Select muscle groups:</p>
            <div className="muscleGroupSelector">
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={back_img}/>
            </div>
            <button onClick={toggleAddMuscleGroup}>Save selection</button>
        </div>
    )
}

export default NewExerciseDivMG;