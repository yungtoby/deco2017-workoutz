import React from 'react';

import '../Pages/NewWorkout.css';
import Workout from '../Classes/Workout.js';
import Exercise from '../Classes/Exercise.js';
import Excs_Set from '../Classes/Excs_Set.js';

/**
 * The main div utilized by MainExerciseDiv.jsx for displaying the main content
 * of the Exercise editor.
 * @param {function} toggleAddMuscleGroup - Function for toggling muscle group adding view
 * @param {functio } toggleAddExercise - Function for toggling exercise editor view
 * @returns The general view of the exercise editor JSX component.
 */
function NewExerciseDivGeneral({toggleAddMuscleGroup, toggleAddExercise}) {
    /* Fix for rerender of specific component */
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    // If current exercise already exists: retrieve, else: make new.
    let currExercise;
    if (localStorage.getItem("currExercise") != null){
        currExercise = Exercise.fromJsonParserBackToExercise(JSON.parse(localStorage.getItem("currExercise")));
    } else {
        currExercise = new Exercise();
    }

    /**
     * Function for getting the current values and saving.
     * Used when switching views for keeping state intact.
     */
    function getCurrValues() {
        let exName = document.getElementById("ex_name");
        let exPauseMin = document.getElementById("ex_pause_min");
        let exPauseSec = document.getElementById("ex_pause_sec");

        currExercise.setName(exName.value);
        currExercise.setPauseTime([exPauseMin.value, exPauseSec.value]);
        
        localStorage.removeItem("currExercise");
        localStorage.setItem("currExercise", JSON.stringify(currExercise));
    }

    /**
     * Reset the current exercise utilized
     * by the exercise editor.
     */
    function resetCurrExercise() {
        localStorage.removeItem("currExercise")
        currExercise = null;
    }

    /**
     * Save the current exercise when function is called
     * and toggle the view back to the Workout editor.
     */
    function handleSaveExerciseClick() {
        getCurrValues()
        if (currExercise.getName() != null && currExercise.getName() != "" && currExercise.getMuscleGroup() != null && 
            currExercise.getPauseTime() != null && currExercise.getSets() != null) {
            let currWorkout = Workout.fromJsonParserBackToWorkout(JSON.parse(localStorage.getItem("currWorkout")));
            currWorkout.appendExercise(currExercise)
        
            localStorage.removeItem("currWorkout")
            localStorage.setItem("currWorkout", JSON.stringify(currWorkout));

            resetCurrExercise()
            toggleAddExercise()
        } else {
            alert("You must finish the exercise before saving!")
        }
    }

    /**
     * Handling the set saving of the exercise editor.
     */
    function handleSaveSetClick(){
        let setReps = document.getElementById("set_reps");
        let setWeight = document.getElementById("set_weight");
        let setWeightType = document.getElementById("set_weight_type");
        
        let currSet = new Excs_Set(setReps.value, setWeight.value, setWeightType.value)
        currExercise.appendSet(currSet)

        localStorage.removeItem("currExercise");
        localStorage.setItem("currExercise", JSON.stringify(currExercise));

        forceUpdate()
    }

    /**
     * Saves curr calues and switches the view to the
     * muscle group view of the exercise editor
     * via @function toggleAddMuscleGroup()
     */
    function addMuscleGroupClick(){
        getCurrValues()
        toggleAddMuscleGroup()
    }


    return (
        <div className="newExerciseDiv">

            <ExerciseName currExercise={currExercise}/>
            <button onClick={addMuscleGroupClick}>Add Muscle Group(s)</button>

            <p id="option_header_p">Add Pause time</p>
            <div className="newExerciseOptionDiv_one">
                <ExerciseMin currExercise={currExercise}/>
                <ExerciseSec currExercise={currExercise}/>
            </div>

            <p id="option_header_p">Add a set</p>
            <div className="newExerciseOptionDiv_two">
                <input id="set_reps" name="setReps" min="0" placeholder="Reps" type="number" />
                <input id="set_weight" name="setWeight" min="0" placeholder="Weight" type="number" />
                <select id="set_weight_type" name="">
                    <option value="KG">KG</option>
                    <option value="LBS">LBS</option>
                </select>
            </div>
            <button onClick={handleSaveSetClick}>Append to above and click me to add the set to set list</button>

            <div className="setList">
                <p id="option_header_p">Set List:</p>
                <div className="setListScroller">
                    <ExerciseSetList currExercise={currExercise} />
                </div>
            </div>

            <button onClick={handleSaveExerciseClick}>Save Exercise</button>
            <p id="warning">All fields are required!</p>
        </div>
    )
}

/**
 * Generates the current name of the exercise chosen by the user
 * if a name is chosen. Keeps this when user switches views in
 * exercise editor.
 * @param {Exercise} currExercise - The current exercise 
 * @returns ExerciseName JSX
 */
function ExerciseName({currExercise}){
    let input;
    if (currExercise.getName() != null && currExercise.getName() != ""){
       input = <input id="ex_name" type="text" name="" defaultValue={currExercise.getName()} />
    } else {
       input = <input id="ex_name" type="text" name="" placeholder="... Exercise name ..." />
    }
    return input;
}

/**
 * Generates the current set minutes of the exercise, chosen by the user
 * if it is chosen. Keeps this when user switches views in exercise editor.
 * @param {Exercise} currExercise - The current exercise 
 * @returns ExerciseMin JSX
 */
function ExerciseMin({currExercise}){
    let input;
    if (currExercise.getPauseTime() == null){
        input = <input id="ex_pause_min" name="setPauseMin" min="0" placeholder="Mins" type="number" />
    } else {
        input = <input id="ex_pause_min" name="setPauseMin" min="0" placeholder="Mins" type="number" defaultValue={currExercise.getPauseTime()[0]} />
    }
    return input;
}

/**
 * Generates the current set seconds of the exercise, chosen by the user
 * if it is chosen. Keeps this when user switches views in exercise editor.
 * @param {Exercise} currExercise - The current exercise 
 * @returns ExerciseSec JSX
 */
function ExerciseSec({currExercise}){
    let input;
    if (currExercise.getPauseTime() == null){
        input = <input id="ex_pause_sec" name="setPauseSec" min="0" max="59" placeholder="Sec" type="number" />
    } else {
        input = <input id="ex_pause_sec" name="setPauseSec" min="0" max="59" placeholder="Sec" type="number" defaultValue={currExercise.getPauseTime()[1]} />
    }
    return input;
}

/**
 * Generates the current setlist of the exercise created by the user
 * if it is already created. Keeps this when user switches views in
 * exercise editor.
 * @param {Exercise} currExercise - The current exercise 
 * @returns ExerciseSetList JSX
 */
function ExerciseSetList({currExercise}){
    if (currExercise.getSets() == null) {
        return <p></p>
    } else {
        let rows_of_sets = []
        for (let i=0; i<currExercise.getSets().length; i++){
            rows_of_sets.push(<p>Set {i+1}: {currExercise.getSets()[i].reps} reps - {currExercise.getSets()[i].weight} {currExercise.getSets()[i].weightType}</p>)
        }
        return rows_of_sets
    }
}

export default NewExerciseDivGeneral;