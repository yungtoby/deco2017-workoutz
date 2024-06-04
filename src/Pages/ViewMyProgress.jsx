import { Link } from 'react-router-dom';
import GenericFooter from '../Components/GenericFooter';
import GenericHeader from '../Components/GenericHeader';

import back_placeholder from '../Images/back.png'
import chest_placeholder from '../Images/chest.png'
import legs_placeholder from '../Images/legs.png'

import './ViewMyProgress.css'

function ViewMyProgress() {
    let currSavedWorkouts;
    if (localStorage.getItem("allWorkouts") != null){
        currSavedWorkouts = JSON.parse(localStorage.getItem("allWorkouts"));
    } else {
        currSavedWorkouts = [];
    }

    function saveSpecific(chosenWorkoutName){
        currSavedWorkouts.forEach((workout) => {
            if (workout.workoutName === chosenWorkoutName){
                localStorage.setItem("chosenWorkout", JSON.stringify(workout))
                return;
            }
        });
    }

    return (
    <>
      <div className="progress_wrapper">

        <GenericHeader />


        <div className="viewProgressDiv">
            <h2>Progress</h2>

            <div className="generalProgress">
                <p>General Progress Info</p>
                <ul>
                    <GeneralProgressLi currSavedWorkouts={currSavedWorkouts}/>
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
                    <CompoundLifts currSavedWorkouts={currSavedWorkouts}/>
                </div>
            </div>
        </div>
        
        <div className="previousWorkoutDiv">
            <h2>Previous workouts</h2>
            <div className="previousWorkoutsList">
                <SummaryWorkouts currSavedWorkouts={currSavedWorkouts} saveSpecific={saveSpecific}/>
            </div>
            <RouteButton LinkTo={"/home"} ButtonName={"Go back to main menu"} />
        </div>


        <GenericFooter />
      </div>
    </>
  )
}

function CompoundLifts({currSavedWorkouts}){
    if (currSavedWorkouts.length < 1){
        return(
            <div className="compoundSpecific">
                <p>Bench press:  N/A  N/A</p>
                <p>Deadlift: N/A  N/A</p>
                <p>Squats:  N/A  N/A</p>
            </div>
        )
    } else {
        let benchpress = [0, 0]
        let benchType = "KG"

        let deadlift = [0, 0]
        let deadType = "KG"

        let squat = [0, 0]
        let squatType = "KG"

        currSavedWorkouts.forEach((workout) => {
            (workout.exercises).forEach((exercise) => {
                if (exercise.exerciseName.toLowerCase() === "bench press" ||
                    exercise.exerciseName.toLowerCase() === "benchpress") {
                    compoundLiftCalculation(exercise, benchpress, benchType);

                } else if (exercise.exerciseName.toLowerCase()  === "deadlift"){
                    compoundLiftCalculation(exercise, deadlift, deadType);

                } else if ((exercise.exerciseName.toLowerCase()  === "squat")){
                    compoundLiftCalculation(exercise, squat, squatType);
                }
            })
        })
        return(
            <div className="compoundSpecific">
                <p>Bench press:  {benchpress[1]} reps  {benchpress[0]}{benchType}</p>
                <p>Deadlift: {deadlift[1]} reps  {deadlift[0]}{deadType}</p>
                <p>Squats:  {squat[1]} reps  {squat[0]}{squatType}</p>
            </div>
        )
    }
}

function compoundLiftCalculation(exercise, compoundLift, compoundLiftType){
    let kg_to_lbs_ratio = 2.20462;
    let lbs_to_kg_ratio = 0.453592;

    (exercise.sets).forEach((set) => {
        let compoundCheck = [0, 0];
        let type = "";
        compoundCheck[0] = +set.weight;
        compoundCheck[1] = +set.reps;
        type = set.weightType;

        if (type === compoundLiftType){
            if (compoundCheck[0] > compoundLift[0]){
                compoundLift[0] = compoundCheck[0];
                compoundLift[1] = compoundCheck[1];
                compoundLiftType = type;
            }
        } else {
            if (type === "LBS"){
                if (compoundCheck[0] > compoundLift[0]*kg_to_lbs_ratio){
                    compoundLift[0] = compoundCheck[0];
                    compoundLift[1] = compoundCheck[1];
                    compoundLiftType = type;
                }
            } else {
                if (compoundCheck[0] > compoundLift[0]*lbs_to_kg_ratio){
                    compoundLift[0] = compoundCheck[0];
                    compoundLift[1] = compoundCheck[1];
                    compoundLiftType = type;
                }
            }
        }
    })
}

function SummaryWorkouts({currSavedWorkouts, saveSpecific}){
    let returnList = [];
    if (currSavedWorkouts.length < 1){
        return;
    } else {
        currSavedWorkouts.forEach((workout) => {
            let dateOfWorkout = new Date(workout.workoutDate);
            let workoutName = workout.workoutName;
            let workoutDay = dateOfWorkout.getDate();
            let workoutMonth = dateOfWorkout.getMonth()+1;
            let workoutYear = dateOfWorkout.getFullYear();
            let exercisesPerf = workout.exercises.length;
            let repsPerf = 0;
            let mostUsedMuscleGroup = [0, 0, 0];

            (workout.exercises).forEach((exercise) => {
                if (exercise.muscleGroup.includes("back")) {
                    mostUsedMuscleGroup[0]++;
                } else if (exercise.muscleGroup.includes("legs")) {
                    mostUsedMuscleGroup[1]++;
                } else {
                    mostUsedMuscleGroup[2]++;
                }
                (exercise.sets).forEach((set) => {
                    repsPerf += +set.reps;
                })
            })

            let mostUsed = Math.max(...mostUsedMuscleGroup);
            let indexOfMostUsed = mostUsedMuscleGroup.indexOf(mostUsed);
            let muscleSource;

            if (indexOfMostUsed === 0){
                muscleSource = back_placeholder;
            } else if (indexOfMostUsed === 1){
                muscleSource = legs_placeholder;
            } else {
                muscleSource = chest_placeholder;
            }

            returnList.push(
                <div className="summaryWorkout">
                    <div>
                        <RouteText text={`${workoutName} (Date: ${workoutDay}/${workoutMonth}/${workoutYear})`} LinkTo={"/specific_workout"}
                        saveSpecific={saveSpecific} arg={workoutName}  />
                        <p>Exercises performed: {exercisesPerf}</p>
                        <p>Reps: {repsPerf}</p>
                    </div>
                    <div>
                        <img src={muscleSource} />
                    </div>
                </div>
            )
        });
        return returnList.reverse();
    }
}

function GeneralProgressLi({currSavedWorkouts}){
    let returnList;
    if (currSavedWorkouts.length < 1){
        returnList = []
        returnList.push(<li><b>Proposed next workout:</b> No workouts saved yet</li>)
        returnList.push(<li><b>Rep range (Avg):</b> No workouts saved yet</li>)
        returnList.push(<li><b>Workouts tracked (Month):</b> No workouts saved yet</li>)
        returnList.push(<li><b>Workouts tracked (Total):</b> No workouts saved yet</li>)
    } else {
        let todaysMonth = new Date().getMonth();
        let proposedNextWorkout = [0, 0, 0];
        let workoutsTrackedThisMonth = 0;
        let workoutsTrackedTotal = 0;
        let setsTotal = 0;
        let repsTotal = 0; 
        
        currSavedWorkouts.forEach((workout) => {
            workoutsTrackedTotal++;
            if (new Date(workout.workoutDate).getMonth() == todaysMonth){
                workoutsTrackedThisMonth++;
            }
            (workout.exercises).forEach((exercise) => {
                if (exercise.muscleGroup.includes("back")) {
                    proposedNextWorkout[0]++;
                } else if (exercise.muscleGroup.includes("legs")) {
                    proposedNextWorkout[1]++;
                } else {
                    proposedNextWorkout[2]++;
                }
                (exercise.sets).forEach((set) => {
                    setsTotal++;
                    repsTotal += +set.reps;
                });
            });
        });
        returnList = []

        let leastUsed = Math.min(...proposedNextWorkout);
        let indexOfLeastUsed = proposedNextWorkout.indexOf(leastUsed);

        if (indexOfLeastUsed === 0){
            returnList.push(<li><b>Proposed next workout:</b> Back workout</li>)
        } else if (indexOfLeastUsed === 1){
            returnList.push(<li><b>Proposed next workout:</b> Leg workout</li>)
        } else {
            returnList.push(<li><b>Proposed next workout:</b> Chest workout</li>)
        }

        returnList.push(<li><b>Rep range (Avg):</b> {repsTotal/setsTotal}</li>)
        returnList.push(<li><b>Workouts tracked (Month):</b> {workoutsTrackedThisMonth}</li>)
        returnList.push(<li><b>Workouts tracked (Total):</b> {workoutsTrackedTotal}</li>)
    }
    return returnList;
}


// React function to create and return a link button
function RouteButton({ ButtonName, LinkTo }) {
    return (
    <Link to={LinkTo}><button>{ButtonName}</button></Link>
    );
}
// React function to create and return a link text
function RouteText({text, LinkTo, saveSpecific, arg}) {
    const handleClick = () =>{
        saveSpecific(arg)
    }
    return (
    <Link to={LinkTo} onClick={handleClick}><a>{text}</a></Link>
    );
}

export default ViewMyProgress;