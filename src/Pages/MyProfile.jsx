import { Link } from 'react-router-dom';
import GenericFooter from '../Components/GenericFooter';
import GenericHeader from '../Components/GenericHeader';

import user from '../Images/user_placeholder.png'
import './MyProfile.css'

function MyProfile() {
  let currSavedWorkouts;
    if (localStorage.getItem("allWorkouts") != null){
        currSavedWorkouts = JSON.parse(localStorage.getItem("allWorkouts"));
    } else {
        currSavedWorkouts = [];
    }

  return (
    <>
      <div className="myProfile_wrapper">
        <GenericHeader />

        <div className="summaryMyProfile">
            <div className="summaryMyProfileUser">
                <h2>my_fitness_user_1</h2>
                <img src={user} />
                <p>Joined workoutz on 14/04/2023</p>
            </div>
            <div className="summaryMyProfileInfo">
                <div className="summaryGeneral">
                    <p>General info:</p>
                    <ul>
                        <li>Name: Tobias Husebø</li>
                        <li>D.O.B: 14/04/2000</li>
                        <li>Gender: Male</li>
                        <li>Current Weight: 81kg</li>
                        <WorkoutsTracked currSavedWorkouts={currSavedWorkouts}/>
                    </ul>
                </div>
                <div className="summaryButtons">
                    <RouteButton ButtonName={"View my Progress"} LinkTo={"/view_my_progress"} />
                    <RouteButton ButtonName={"Go back to main menu"} LinkTo={"/home"} />
                </div>
            </div>
        </div>

        <GenericFooter />
      </div>
    </>
  )
}

function WorkoutsTracked({currSavedWorkouts}){
  return(
    <li>Workouts tracked: {currSavedWorkouts.length}</li>
  )
}

// React function to create and return a link button
function RouteButton({ ButtonName, LinkTo }) {
    return (
    <Link to={LinkTo}><button>{ButtonName}</button></Link>
    );
}


export default MyProfile;