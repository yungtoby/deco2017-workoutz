import { useState, useRef, useEffect } from 'react';
import GenericFooter from '../Components/GenericFooter';
import GenericHeader from '../Components/GenericHeader';
import NewWorkoutDiv from '../Components/newWorkoutDiv';
import NewExerciseDiv from '../Components/NewExerciseDiv';
import Workout from '../Classes/Workout.js';

import './NewWorkout.css'

/**
 * A function returning the new workout editor page of the application
 * @returns NewWorkout JSX page
 */
function NewWorkout() {
  // Use states to remember toggles between pages. (Look below for explanation)
  //     var holding state  func switching state      init state
  const [isShowMainContent, setShowMainContent] = useState(true);

  // Main function passed to switch content
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