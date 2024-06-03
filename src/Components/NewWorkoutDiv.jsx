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

    console.log(currWorkout)

    function getCurrValuesAndSave() {
        let wrkName = document.getElementById("wrk_name");
        let wrkDate = document.getElementById("wrk_date");
        let wrkWeighIn = document.getElementById("weighin_input");
        let wrkWeighInType = document.getElementById("weighin_input");

        currWorkout.setName(wrkName.value);
        currWorkout.setDate(wrkDate.value);
        currWorkout.setWeighIn(wrkWeighIn.value);
        currWorkout.setWeighInType(wrkWeighInType.value);
        
        localStorage.removeItem("currWorkout");
        localStorage.setItem("currWorkout", JSON.stringify(currWorkout));
    }

    function resetCurrWorkout() {
        localStorage.removeItem("currWorkout")
        currWorkout = null;
    }

    function handleNewExerciseClick() {
        getCurrValuesAndSave()
        toggleAddExercise()
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
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>Deadlifts</b>
                            <p>Set 1: 5 reps - 95kg</p>
                            <p>Set 2: 5 reps - 95kg</p>
                            <p>Set 3: 5 reps - 95kg</p>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={back} />
                            <p>Pause between set:<br/>2 min 20 sec</p>
                        </div>
                    </div>
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>Deadlifts</b>
                            <p>Set 1: 5 reps - 95kg</p>
                            <p>Set 2: 5 reps - 95kg</p>
                            <p>Set 3: 5 reps - 95kg</p>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={back} />
                            <p>Pause between set:<br/>2 min 20 sec</p>
                        </div>
                    </div>
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>Deadlifts</b>
                            <p>Set 1: 5 reps - 95kg</p>
                            <p>Set 2: 5 reps - 95kg</p>
                            <p>Set 3: 5 reps - 95kg</p>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={back} />
                            <p>Pause between set:<br/>2 min 20 sec</p>
                        </div>
                    </div>
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>Deadlifts</b>
                            <p>Set 1: 5 reps - 95kg</p>
                            <p>Set 2: 5 reps - 95kg</p>
                            <p>Set 3: 5 reps - 95kg</p>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={back} />
                            <p>Pause between set:<br/>2 min 20 sec</p>
                        </div>
                    </div>
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>Deadlifts</b>
                            <p>Set 1: 5 reps - 95kg</p>
                            <p>Set 2: 5 reps - 95kg</p>
                            <p>Set 3: 5 reps - 95kg</p>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={back} />
                            <p>Pause between set:<br/>2 min 20 sec</p>
                        </div>
                    </div>
                    <div className="exercise">
                        <div className="exerciseNameAndSets">
                            <b>Deadlifts</b>
                            <p>Set 1: 5 reps - 95kg</p>
                            <p>Set 2: 5 reps - 95kg</p>
                            <p>Set 3: 5 reps - 95kg</p>
                        </div>
                        <div className="exerciseImgAndPause">
                            <img src={back} />
                            <p>Pause between set:<br/>2 min 20 sec</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="routingAndSaveButtons">
                <RouteButton LinkTo={"/home"} ButtonName={"Go back to main menu"} ResetCurr={resetCurrWorkout}/>
                <button>Save workout</button>
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
    if (currWorkout.getDate() == null) {
        input = <input id="wrk_date" type="date" name="workoutdate" />
    } else {
        let day = currWorkout.getDate().getDate();
        if (day < 10){
            day = `0${day}`
        }
        let month = currWorkout.getDate().getMonth() + 1;
        if (month < 10){
            month = `0${month}`
        }
        let year = currWorkout.getDate().getFullYear();
        input = <input id="wrk_date" type="date" name="workoutdate" value={`${year}-${month}-${day}`}/>
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

// React function to create and return a link button
function RouteButton({ ButtonName, LinkTo, ResetCurr }) {
    return (
    <Link to={LinkTo}><button onClick={ResetCurr}>{ButtonName}</button></Link>
    );
}

export default NewWorkoutDiv;