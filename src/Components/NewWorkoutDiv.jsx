import React from 'react';
import { Link } from 'react-router-dom';

import name from '../Images/name.png';
import date from '../Images/date.png';
import weighin from '../Images/weighin.png';
import note from '../Images/note.png';
import back from '../Images/back.png';

import '../Pages/NewWorkout.css'

function NewWorkoutDiv({toggleAddExercise}) {
    return(
        <div className="newWorkoutDiv">
            <div className="exerciseEditor">
                <h2>New workout</h2>
                <div className="optionsWrapper">
                    <div className="options">
                        <label htmlFor="workoutname">Workout Name</label>
                        <div className="options_w_pic">
                            <img src={name}/>
                            <input type="text" name="workoutname" placeholder="Insert workout name here ..." />
                        </div>

                        <label htmlFor="workoutdate">Workout date</label>
                        <div className="options_w_pic">
                            <img src={date}/>
                            <input type="date" name="workoutdate" />
                        </div>
                    </div>
                    <div className="options">
                    <label htmlFor="workoutweight">Weigh-in</label>
                        <div className="options_w_pic">
                            <img src={weighin}/>
                            <input id="weighin_input" type="number" name="workoutweight" placeholder="Insert weight here ..." />
                            <select>
                                <option value="KG">KG</option>
                                <option value="LBS">LBS</option>
                            </select>
                        </div>

                        <label htmlFor="workoutnote">Add note</label>
                        <div className="options_w_pic">
                            <img src={note}/>
                            <button name="workoutnote">Add note</button>
                        </div>
                    </div>
                </div>
               <button onClick={toggleAddExercise}>Add new exercise</button>
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
                <RouteButton LinkTo={"/home"} ButtonName={"Go back to main menu"} />
                <button>Save workout</button>
            </div>
        </div>
    )
}

// React function to create and return a link button
function RouteButton({ ButtonName, LinkTo }) {
    return (
    <Link to={LinkTo}><button>{ButtonName}</button></Link>
    );
}

export default NewWorkoutDiv;