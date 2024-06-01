import { Link } from 'react-router-dom';

import main_header from '../Images/main_header.png'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <div className="homePage_wrapper">
        <div className="homePageHeader">
            <img src={main_header} />
        </div>

        <div className="summaryContent">
            <h2>Summary</h2>
        </div>

        <div className="routingContent">
            <RouteButton ButtonName={"Button 1"} LinkTo={"/"} />
            <RouteButton ButtonName={"Button 2"} LinkTo={"/"}  />
            <RouteButton ButtonName={"Button 3"} LinkTo={"/"}  />
            <button id="signoutButton">Sign Out</button>
        </div>

        <div>

        </div>
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

export default HomePage;
