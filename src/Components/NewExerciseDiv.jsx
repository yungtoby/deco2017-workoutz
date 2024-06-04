import React from 'react';
import { useState } from 'react';
import NewExerciseDivGeneral from './NewExerciseDivGeneral';
import NewExerciseDivMG from './NewExerciseDivMG';
import '../Pages/NewWorkout.css'

/**
 * A function for returning the div for displaying the
 * exercise editor of the workout editor.
 * @param {function} toggleAddExercise A function for toggling between main workout
 *                                     editor view and exercise adder 
 * @returns New Exercise Div JSX component
 */
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