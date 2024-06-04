import { Link } from 'react-router-dom';

import GenericFooter from '../Components/GenericFooter';
import GenericHeader from '../Components/GenericHeader';
import Workout from '../Classes/Workout.js'

import './SpecificWorkout.css'
import './NewWorkout.css'

function SpecificWorkout() {
    let chosenWorkout = Workout.fromJsonParserBackToWorkout(JSON.parse(localStorage.getItem("chosenWorkout")));

    return (
    <>
      <div className="specificWorkout_wrapper">
        <GenericHeader />
        
        <div className="mainDiv">
            <WorkoutName chosenWorkout={chosenWorkout} />
            <div className="mainDivPartOne">
                <WorkoutGeneralInfo chosenWorkout={chosenWorkout}/>
            </div>

            <div className="exerciseList">
                <h2>Exercise List:</h2>
                <div className="addedExerciseScroller">
                    <ExercisesInList chosenWorkout={chosenWorkout}/>
                </div>
            </div>
            <RouteButton ButtonName={"Go back"} LinkTo={"/home"} />
        
        </div>

        <GenericFooter />
      </div>
    </>
  )
}

function WorkoutName({chosenWorkout}){
    return(
        <h1>{chosenWorkout.getName()}</h1>
    )
}

function WorkoutGeneralInfo({chosenWorkout}){
    let generalInfo = []

    let day = chosenWorkout.getDate().getDate();
    if (day < 10){
        day = `0${day}`;
    }
    let month = chosenWorkout.getDate().getMonth() + 1;
    if (month < 10){
        month = `0${month}`;
    }
    let year = chosenWorkout.getDate().getFullYear();
    
    let mostUsedMuscleGroup = [0, 0, 0];
    (chosenWorkout.getExercises()).forEach((exercise) => {
        if (exercise.muscleGroup.includes("back")) {
            mostUsedMuscleGroup[0]++;
        } else if (exercise.muscleGroup.includes("legs")) {
            mostUsedMuscleGroup[1]++;
        } else {
            mostUsedMuscleGroup[2]++;
        }})

    let mostUsed = Math.max(...mostUsedMuscleGroup);
    let indexOfMostUsed = mostUsedMuscleGroup.indexOf(mostUsed);
    let muscleSource;

    if (indexOfMostUsed === 0){
        muscleSource = "Back";
    } else if (indexOfMostUsed === 1){
        muscleSource = "Legs";
    } else {
        muscleSource = "Chest";
    }

    generalInfo.push(<p><b>Date:</b> {day}/{month}/{year}</p>);
    generalInfo.push(<p><b>Weigh In:</b> {chosenWorkout.getWeighIn()} {chosenWorkout.getWeighInType()}</p>);
    generalInfo.push(<p><b>Main muscle group utilised:</b> {muscleSource}</p>);

    return generalInfo;
}


function ExercisesInList({chosenWorkout}){
    if (chosenWorkout.getExercises() === 0){
        return;
    } else {
        let list_of_exercises = []
        chosenWorkout.getExercises().forEach((exercise) => {
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
function RouteButton({ ButtonName, LinkTo, btn_id }) {
    return (
    <Link to={LinkTo}><button id={btn_id}>{ButtonName}</button></Link>
    );
}

export default SpecificWorkout;