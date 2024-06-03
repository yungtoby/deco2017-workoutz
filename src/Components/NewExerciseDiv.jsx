import React from 'react';
import { useState } from 'react';

import NewExerciseDivGeneral from './NewExerciseDivGeneral';
import NewExerciseDivMG from './NewExerciseDivMG';
import '../Pages/NewWorkout.css'

function NewExerciseDiv({toggleAddExercise}) {
    const [isGeneralContentContent, setGeneralContentContent] = useState(true);

    const toggleAddMuscleGroup = () => {
        setGeneralContentContent(!isGeneralContentContent);
    };

    return(
        <div className="newWorkoutDiv">
            {isGeneralContentContent ? <NewExerciseDivGeneral toggleAddMuscleGroup={toggleAddMuscleGroup}
            toggleAddExercise={toggleAddExercise}/>
            : <NewExerciseDivMG toggleAddMuscleGroup={toggleAddMuscleGroup} />}
        </div>
    )
}

export default NewExerciseDiv;