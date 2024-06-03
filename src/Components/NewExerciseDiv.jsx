import React from 'react';
import { useState } from 'react';

import NewExerciseDivGeneral from './NewExerciseDivGeneral';
import '../Pages/NewWorkout.css'

function NewExerciseDiv({toggleAddExercise}) {
    const [isShowMainContent, setShowMainContent] = useState(true);

    const toggleAddMuscleGroup = () => {
        setShowMainContent(!isShowMainContent);
    };

    return(
        <div className="newWorkoutDiv">
            {isShowMainContent ? <NewExerciseDivGeneral toggleAddMuscleGroup={toggleAddMuscleGroup}
            toggleAddExercise={toggleAddExercise}/>
            : <h1>Hello</h1>}
        </div>
    )
}

export default NewExerciseDiv;