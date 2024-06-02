import { Link } from 'react-router-dom';
import GenericFooter from '../Components/GenericFooter';
import GenericHeader from '../Components/GenericHeader';

import back_placeholder from '../Images/back.png'
import './ViewMyProgress.css'

function ViewMyProgress() {
  return (
    <>
      <div className="progress_wrapper">

        <GenericHeader />


        <div className="viewProgressDiv">
            <h2>Progress</h2>

            <div className="generalProgress">
                <p>General Progress Info</p>
                <ul>
                    <li><b>Proposed next workout:</b> Leg workout</li>
                    <li><b>Rep range (Avg):</b> 9</li>
                    <li><b>Workouts tracked (Month):</b> 5</li>
                    <li><b>Workouts tracked (Total):</b> 9</li>
                </ul>
            </div>

            <div className="weightAndCompound">
                <div className="weight">
                    <p>Weight</p>
                    <div className="weightGraphAndGoals">
                        <div className="weightGraph">
                            <p>Weight progress:</p>
                            <p>*Graph here*</p>
                        </div>
                        <div className="goals"> 
                            <p>Current weight:<br />81kg</p>
                            <p>Goal weight:<br />90kg</p>
                        </div>
                    </div>
                </div>
                <div className="compound">
                    <p>Compound lifts</p>
                    <div className="compoundSpecific">
                        <p>Bench press:  (3x5)  95kg</p>
                        <p>Deadlift:  (3x5)  160kg</p>
                        <p>Squats:  N/A  N/A</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="previousWorkoutDiv">
            <h2>Previous workouts</h2>
            <div className="previousWorkoutsList">
                <div className="summaryWorkout">
                    <div>
                        <RouteText text={"Back Workout (Date: 13/04/2024)"} LinkTo={"/"}  />
                        <p>Exercises performed: ?</p>
                        <p>Reps: ?</p>
                    </div>
                    <div>
                        <img src={back_placeholder} />
                    </div>
                </div>
                <div className="summaryWorkout">
                    <div>
                        <RouteText text={"Back Workout (Date: 13/04/2024)"} LinkTo={"/"}  />
                        <p>Exercises performed: ?</p>
                        <p>Reps: ?</p>
                    </div>
                    <div>
                        <img src={back_placeholder} />
                    </div>
                </div>
                <div className="summaryWorkout">
                    <div>
                        <RouteText text={"Back Workout (Date: 13/04/2024)"} LinkTo={"/"}  />
                        <p>Exercises performed: ?</p>
                        <p>Reps: ?</p>
                    </div>
                    <div>
                        <img src={back_placeholder} />
                    </div>
                </div>
                <div className="summaryWorkout">
                    <div>
                        <RouteText text={"Back Workout (Date: 13/04/2024)"} LinkTo={"/"}  />
                        <p>Exercises performed: ?</p>
                        <p>Reps: ?</p>
                    </div>
                    <div>
                        <img src={back_placeholder} />
                    </div>
                </div>
                <div className="summaryWorkout">
                    <div>
                        <RouteText text={"Back Workout (Date: 13/04/2024)"} LinkTo={"/"}  />
                        <p>Exercises performed: ?</p>
                        <p>Reps: ?</p>
                    </div>
                    <div>
                        <img src={back_placeholder} />
                    </div>
                </div>
            </div>
            <RouteButton LinkTo={"/home"} ButtonName={"Go back to main menu"} />
        </div>


        <GenericFooter />
      </div>
    </>
  )
}


// React function to create and return a link button
function RouteButton({ ButtonName, LinkTo }) {
    return (
    <Link to={LinkTo}><button>{ButtonName}</button></Link>
    );
}
// React function to create and return a link text
function RouteText({text, LinkTo }) {
    return (
    <Link to={LinkTo}><a>{text}</a></Link>
    );
}

export default ViewMyProgress;