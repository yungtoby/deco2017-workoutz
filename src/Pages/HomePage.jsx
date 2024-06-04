import { Link } from 'react-router-dom';
import GenericFooter from '../Components/GenericFooter';
import GenericHeader from '../Components/GenericHeader';

import user_placeholder from '../Images/user_placeholder.png'
import chest_placeholder from '../Images/chest.png'
import back_placeholder from '../Images/back.png'
import legs_placeholder from '../Images/legs.png'

import './HomePage.css'

function HomePage() {
    let currSavedWorkouts;
    if (localStorage.getItem("allWorkouts") != null){
        currSavedWorkouts = JSON.parse(localStorage.getItem("allWorkouts"));
    } else {
        currSavedWorkouts = [];
    }

    return (
    <>
      <div className="homePage_wrapper">
        <GenericHeader />

        <div className="summaryContent">
            <div className="summaryInfoUser">
                <p>Welcome back,<br />my_fitness_user1</p>
                <img src={user_placeholder} />
            </div>
            <div className="summaryRecentWorkouts">
                <p>Recent workouts:</p>
                <SummaryWorkouts currSavedWorkouts={currSavedWorkouts} />
            </div>
        </div>


        <div className="routingContent">
            <RouteButton ButtonName={"New workout"} LinkTo={"/new_workout"} />
            <RouteButton ButtonName={"View my progress"} LinkTo={"/view_my_progress"}  />
            <RouteButton ButtonName={"My profile"} LinkTo={"/my_profile"}  />
            <RouteButton ButtonName={"Signout"} LinkTo={"/"} btn_id={"signoutButton"} />
        </div>
        <GenericFooter />
      </div>
    </>
  )
}

function SummaryWorkouts({currSavedWorkouts}){
    let returnList = [];
    if (currSavedWorkouts.length < 1){
        return;
    } else {
        let counter = 0;
        currSavedWorkouts.forEach((workout) => {
            if (counter !== 3){
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
                        <RouteText text={`${workoutName} (Date: ${workoutDay}/${workoutMonth}/${workoutYear})`} LinkTo={"/"}  />
                        <p>Exercises performed: {exercisesPerf}</p>
                        <p>Reps: {repsPerf}</p>
                    </div>
                    <div>
                        <img src={muscleSource} />
                    </div>
                </div>
            )
            counter++;
            }});

        return returnList.reverse();
    }
}

// React function to create and return a link button
function RouteButton({ ButtonName, LinkTo, btn_id }) {
    return (
    <Link to={LinkTo}><button id={btn_id}>{ButtonName}</button></Link>
    );
}
// React function to create and return a link text
function RouteText({text, LinkTo }) {
    return (
    <Link to={LinkTo}><a>{text}</a></Link>
    );
}

export default HomePage;
