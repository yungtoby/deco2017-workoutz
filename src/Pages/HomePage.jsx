import { Link } from 'react-router-dom';
import GenericFooter from '../Components/GenericFooter';
import GenericHeader from '../Components/GenericHeader';

import user_placeholder from '../Images/user_placeholder.png'
import chest_placeholder from '../Images/chest.png'
import back_placeholder from '../Images/back.png'
import legs_placeholder from '../Images/legs.png'

import './HomePage.css'

function HomePage() {
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
                <div className="summaryWorkout">
                    <div>
                        <RouteText text={"Chest Workout (Date: 14/04/2024)"} LinkTo={"/"}  />
                        <p>Exercises performed: ?</p>
                        <p>Reps: ?</p>
                    </div>
                    <div>
                        <img src={chest_placeholder} />
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
                        <RouteText text={"Leg Workout (Date: 12/04/2024)"} LinkTo={"/"}  />
                        <p>Exercises performed: ?</p>
                        <p>Reps: ?</p>
                    </div>
                    <div>
                        <img src={legs_placeholder} />
                    </div>
                </div>
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
