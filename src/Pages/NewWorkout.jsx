import { useState, useRef, useEffect } from 'react';
import GenericFooter from '../Components/GenericFooter';
import GenericHeader from '../Components/GenericHeader';
import NewWorkoutDiv from '../Components/newWorkoutDiv';
import NewExerciseDiv from '../Components/NewExerciseDiv';
import Workout from '../Classes/Workout.js';

import './NewWorkout.css'

function NewWorkout() {
  const [isShowMainContent, setShowMainContent] = useState(true);

  const toggleAddExercise = () => {
    setShowMainContent(!isShowMainContent);
  };

  return (
    <>
      <div className="newWorkout_wrapper">
        <GenericHeader />

        {isShowMainContent ? <NewWorkoutDiv toggleAddExercise={toggleAddExercise}  />
         : <NewExerciseDiv toggleAddExercise={toggleAddExercise} />}

        <GenericFooter />
      </div>
    </>
  )
}


export default NewWorkout;