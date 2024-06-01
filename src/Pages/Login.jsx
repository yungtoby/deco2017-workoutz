import { Link } from 'react-router-dom';

import main_header from '../Images/main_header.png'
import insta_logo from '../Images/insta.png'
import twitter_logo from '../Images/twitter.png'
import face_logo from '../Images/face.png'
import user_login_pic from '../Images/user_login.png'
import pass_login_pic from '../Images/pass_login.png'
import signup_pic from '../Images/signup.png'
import './Login.css'

function Login() {
  return (
    <>
      <div className="login_page_wrapper">
        <div className="loginHeader"></div>

        <div className="loginInfoContent">
          <img src={main_header} />
          <p>Your personal workout assistant</p>

          <div className="loginInfoContentFooter">
            <a><img src={insta_logo} /></a>
            <a><img src={twitter_logo} /></a>
            <a><img src={face_logo} /></a>
          </div>
        </div>

        <div className="loginContent">
          <h2>Login</h2>
          <form>
            <div className="loginContentInputDiv"><img src={user_login_pic} /><input type="text" placeholder="Email or Username"></input></div>
            <div className="loginContentInputDiv"><img src={pass_login_pic} /><input type="password" placeholder="Password"></input></div>
          </form>
            <Link to="/home"><input id="submitLoginButton" type="submit" value={"Login"}></input></Link>
          <div className="loginContentSignup">
            <p>Sign up</p>
            <img src={signup_pic} />
          </div>
        </div>
        
        <div className="loginFooter">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare quis dolor sit amet varius.
            Pellentesque pulvinar urna vel mi semper, sed pharetra purus aliquam. Curabitur tristique id quam ut mollis.
            Vestibulum mollis lectus et leo lobortis, vitae iaculis dui tempor.</p>
        </div>
      </div>
    </>
  )
}

export default Login;
