import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import name from '../Images/name.png';
import date from '../Images/date.png';
import weighin from '../Images/weighin.png';
import note from '../Images/note.png';
import back from '../Images/back.png';

import Workout from '../Classes/Workout.js'
import '../Pages/NewWorkout.css'

function NewWorkoutDiv({toggleAddExercise}) {

    let currWorkout;
    if (localStorage.getItem("currWorkout") != null){
        currWorkout = Workout.fromJsonParserBackToWorkout(JSON.parse(localStorage.getItem("currWorkout")));
    } else {
        currWorkout = new Workout();
    }

    function getCurrValuesAndSave() {
        let wrkName = document.getElementById("wrk_name");
        let wrkDate = document.getElementById("wrk_date");
        let wrkWeighIn = document.getElementById("weighin_input");
        let wrkWeighInType = document.getElementById("weighin_input");
        
        if (wrkName.value != ""){
            currWorkout.setName(wrkName.value);
        } if (wrkDate.value != ""){
            currWorkout.setDate(wrkDate.value);
        } if (wrkWeighIn.value != ""){
            currWorkout.setWeighIn(wrkWeighIn.value);
        } if (wrkWeighInType.value !=""){
            currWorkout.setWeighInType(wrkWeighInType.value);
        }
        
        localStorage.removeItem("currWorkout");
        localStorage.setItem("currWorkout", JSON.stringify(currWorkout));
    }

    function resetCurrWorkout() {
        localStorage.removeItem("currWorkout")
        currWorkout = null;
    }

    function handleNewExerciseClick() {
        getCurrValuesAndSave();
        toggleAddExercise();
    }

    function saveCurrWorkout(){
        if (currWorkout.getExercises().length < 1){
            resetCurrWorkout();
            alert("You need to at least add 1 exercise\nWorkout was not saved.");
            return;
        } else if (currWorkout.getName() == "" || currWorkout.getWeighInType() == "" ||
                   currWorkout.getWeighInType() == ""){
            resetCurrWorkout();
            alert("You need to add name, weighIn, weighInType and Date!\nWorkout was not saved.");
            return;
        } else if (currWorkout.getDate().getFullYear() == 1970){
            resetCurrWorkout();
            alert("You need to add name, weighIn, weighInType and Date!\nWorkout was not saved.");
            return;
        }
        let allWorkouts
        if (localStorage.getItem("allWorkouts") == null){
            allWorkouts = [];
        } else {
            allWorkouts = JSON.parse(localStorage.getItem("allWorkouts"));
        }
        allWorkouts.push(currWorkout);
        localStorage.setItem("allWorkouts", JSON.stringify(allWorkouts));

        resetCurrWorkout();
        alert("Workout Saved!");
    }

    return(
        <div className="newWorkoutDiv">
            <div className="exerciseEditor">
                <h2>New workout</h2>
                <div className="optionsWrapper">
                    <div className="options">
                        <label htmlFor="workoutname">Workout Name</label>
                        <div className="options_w_pic">
                            <img src={name}/>
                            <WorkoutNameInput currWorkout={currWorkout}/>
                        </div>

                        <label htmlFor="workoutdate">Workout date</label>
                        <div className="options_w_pic">
                            <img src={date}/>
                            <WorkoutDateInput currWorkout={currWorkout} />
                        </div>
                    </div>
                    <div className="options">
                    <label htmlFor="workoutweight">Weigh-in</label>
                        <div className="options_w_pic">
                            <img src={weighin}/>
                            <WorkoutWeighInInput currWorkout={currWorkout}/>
                            <WorkoutWeighInTypeInput currWorkout={currWorkout}/>
                        </div>

                        <label htmlFor="workoutnote">Add note</label>
                        <div className="options_w_pic">
                            <img src={note}/>
                            <button name="workoutnote">Add note</button>
                        </div>
                    </div>
                </div>
               <button onClick={handleNewExerciseClick}>Add new exercise</button>
            </div>

            <div className="exerciseList">
                <h2>Exercise List:</h2>
                <div className="addedExerciseScroller">
                    <ExercisesInList currWorkout={currWorkout}/>
                </div>
            </div>
            <div className="routingAndSaveButtons">
                <RouteButton LinkTo={"/home"} ButtonName={"Go back to main menu"} ResetCurr={resetCurrWorkout}/>
                <RouteButton LinkTo={"/home"} ButtonName={"Save Workout"} ResetCurr={saveCurrWorkout}/>
            </div>
        </div>
    )
}

function WorkoutNameInput({currWorkout}) {
    let input;
    if (currWorkout.getName() == null) {
        input = <input id="wrk_name" type="text" name="workoutname" placeholder="Insert workout name here ..." />
    } else {
        input = <input id="wrk_name" type="text" name="workoutname" defaultValue={currWorkout.workoutName}/>
    }
    return input;
}

function WorkoutDateInput({currWorkout}) {
    let input;

    if (currWorkout.getDate() == null || currWorkout.getDate() == "") {
        input = <input id="wrk_date" type="date" name="workoutdate" />
    } else {
        let day = currWorkout.getDate().getDate();
        if (day < 10){
            day = `0${day}`;
        }
        let month = currWorkout.getDate().getMonth() + 1;
        if (month < 10){
            month = `0${month}`;
        }
        let year = currWorkout.getDate().getFullYear();

        if (year === 1970 && month === "01" && day == "01"){
            input = <input id="wrk_date" type="date" name="workoutdate" />
        } else {
            input = <input id="wrk_date" type="date" name="workoutdate" value={`${year}-${month}-${day}`}/>
        }
    }
    return input;
}

function WorkoutWeighInInput({currWorkout}) {
    let input;
    if (currWorkout.getWeighIn() == null) {
        input = <input id="weighin_input" type="number" min="0" name="workoutweight" placeholder="Insert weight here ..." />
    } else {
        input = <input id="weighin_input" type="number" min="0" name="workoutweight" defaultValue={currWorkout.getWeighIn()}/>
    }
    return input;
}

function WorkoutWeighInTypeInput({currWorkout}) {
    let input;
    if (currWorkout.getWeighInType() == null) {
        input = <select id="weighin_type"><option value="KG">KG</option><option value="LBS">LBS</option></select>
    } else {
        if (currWorkout.getWeighInType() == "KG") {
            input = <select id="weighin_type" ><option value="KG" selected>KG</option><option value="LBS">LBS</option></select>
        } else {
            input = <select id="weighin_type" ><option value="KG">KG</option><option value="LBS" selected>LBS</option></select>
        }
    }
    return input;
}

function ExercisesInList({currWorkout}){
    if (currWorkout.getExercises() === 0){
        return;
    } else {
        let list_of_exercises = []
        currWorkout.getExercises().forEach((exercise) => {
            if (exercise.sets.length === 3 || exercise.sets.length > 3){
                list_of_exercises.push(
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>{exercise.exerciseName}</b>
                            <p>Set 1: {exercise.sets[0].reps} reps - {exercise.sets[0].weight}{exercise.sets[0].weightType}</p>
                            <p>Set 2: {exercise.sets[1].reps} reps - {exercise.sets[1].weight}{exercise.sets[1].weightType}</p>
                            <p>Set 3: {exercise.sets[2].reps} reps - {exercise.sets[2].weight}{exercise.sets[2].weightType}</p>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={exercise.muscleGroup} />
                            <p>Pause between set:<br/>{exercise.pauseTime[0]} min {exercise.pauseTime[1]} sec</p>
                        </div>
                    </div>
                )
            } else if (exercise.sets.length === 2){
                list_of_exercises.push(
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>{exercise.exerciseName}</b>
                            <p>Set 1: {exercise.sets[0].reps} reps - {exercise.sets[0].weight}{exercise.sets[0].weightType}</p>
                            <p>Set 2: {exercise.sets[1].reps} reps - {exercise.sets[1].weight}{exercise.sets[1].weightType}</p>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={exercise.muscleGroup} />
                            <p>Pause between set:<br/>{exercise.pauseTime[0]} min {exercise.pauseTime[1]} sec</p>
                        </div>
                    </div>
                )
            } else if (exercise.sets.length === 1) {
                list_of_exercises.push(
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>{exercise.exerciseName}</b>
                            <p>Set 1: {exercise.sets[0].reps} reps - {exercise.sets[0].weight}{exercise.sets[0].weightType}</p>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={exercise.muscleGroup} />
                            <p>Pause between set:<br/>{exercise.pauseTime[0]} min {exercise.pauseTime[1]} sec</p>
                        </div>
                    </div>
                )
            } else {
                list_of_exercises.push(
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>{exercise.exerciseName}</b>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={exercise.muscleGroup} />
                            <p>Pause between set:<br/>{exercise.pauseTime[0]} min {exercise.pauseTime[1]} sec</p>
                        </div>
                    </div>
                );
            }
        })
    return list_of_exercises};
}


// React function to create and return a link button
function RouteButton({ ButtonName, LinkTo, ResetCurr }) {
    return (
    <Link to={LinkTo}><button onClick={ResetCurr}>{ButtonName}</button></Link>
    );
}








export default NewWorkoutDiv;