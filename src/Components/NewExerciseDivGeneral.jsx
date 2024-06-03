import React from 'react';

import '../Pages/NewWorkout.css';
import Workout from '../Classes/Workout.js';
import Exercise from '../Classes/Exercise.js';
import Excs_Set from '../Classes/Excs_Set.js';


function NewExerciseDivGeneral({toggleAddMuscleGroup, toggleAddExercise}) {
    /* Fix for rerender of specific component */
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    let currExercise;
    if (localStorage.getItem("currExercise") != null){
        currExercise = Exercise.fromJsonParserBackToExercise(JSON.parse(localStorage.getItem("currExercise")));
    } else {
        currExercise = new Exercise();
    }


    function getCurrValues() {
        let exName = document.getElementById("ex_name");
        let exPauseMin = document.getElementById("ex_pause_min");
        let exPauseSec = document.getElementById("ex_pause_sec");

        currExercise.setName(exName.value);
        currExercise.setPauseTime([exPauseMin.value, exPauseSec.value]);
        
        localStorage.removeItem("currExercise");
        localStorage.setItem("currExercise", JSON.stringify(currExercise));
    }


    function resetCurrExercise() {
        localStorage.removeItem("currExercise")
        currExercise = null;
    }


    function handleSaveExerciseClick() {
        getCurrValues()
        let currWorkout = Workout.fromJsonParserBackToWorkout(JSON.parse(localStorage.getItem("currWorkout")));
        currWorkout.appendExercise(currExercise)


        localStorage.removeItem("currWorkout")
        localStorage.setItem("currWorkout", JSON.stringify(currWorkout));

        resetCurrExercise()
        toggleAddExercise()
    }


    function handleSaveSetClick(){
        let setReps = document.getElementById("set_reps");
        let setWeight = document.getElementById("set_weight");
        let setWeightType = document.getElementById("set_weight_type");
        
        let currSet = new Excs_Set(setReps.value, setWeight.value, setWeightType.value)
        currExercise.appendSet(currSet)

        localStorage.removeItem("currExercise");
        localStorage.setItem("currExercise", JSON.stringify(currExercise));

        setReps.value="";
        setWeight.value="";
        setWeightType.value="";
        forceUpdate()
        alert("Set added!")
    }


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
            <p id="warning">Field marked with asterisk (*) are required</p>
        </div>
    )
}

function ExerciseName({currExercise}){
    let input;
    if (currExercise.getName() != null){
       input = <input id="ex_name" type="text" name="" defaultValue={currExercise.getName()} />
    } else {
       input = <input id="ex_name" type="text" name="" placeholder="... Exercise name ..." />
    }
    return input;
}
function ExerciseMin({currExercise}){
    let input;
    if (currExercise.getPauseTime() == null){
        input = <input id="ex_pause_min" name="setPauseMin" min="0" placeholder="Mins" type="number" />
    } else {
        input = <input id="ex_pause_min" name="setPauseMin" min="0" placeholder="Mins" type="number" defaultValue={currExercise.getPauseTime()[0]} />
    }
    return input;
}
function ExerciseSec({currExercise}){
    let input;
    if (currExercise.getPauseTime() == null){
        input = <input id="ex_pause_sec" name="setPauseSec" min="0" max="59" placeholder="Sec" type="number" />
    } else {
        input = <input id="ex_pause_sec" name="setPauseSec" min="0" max="59" placeholder="Sec" type="number" defaultValue={currExercise.getPauseTime()[1]} />
    }
    return input;
}
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