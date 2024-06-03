import React from 'react';
import { useState } from 'react';

import NewExerciseDivGeneral from './NewExerciseDivGeneral';
import NewExerciseDivMG from './NewExerciseDivMG';
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
            : <NewExerciseDivMG toggleAddMuscleGroup={toggleAddMuscleGroup} />}
        </div>
    )
}

export default NewExerciseDiv;