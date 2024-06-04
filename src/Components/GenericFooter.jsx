import React from 'react';
import insta_logo from '../Images/insta.png'
import twitter_logo from '../Images/twitter.png'
import face_logo from '../Images/face.png'

/**
 * Component function returning a generic footer
 * @returns Generic Footer JSX component
 */
function GenericFooter() {
    return(
        <div className="homePageFooter">
            <div className="footerImgs">
                <a><img src={insta_logo} /></a>
                <a><img src={twitter_logo} /></a>
                <a><img src={face_logo} /></a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare quis dolor sit amet varius.</p>
        </div>
    )
}

export default GenericFooter;