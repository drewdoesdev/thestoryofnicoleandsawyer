import React from "react";
import imageOne from "../img/beach-sunset.jpg";
import imageTwo from "../img/bonnaroo.jpg";
import imageThree from "../img/copenhagen.jpg";
import imageFour from "../img/mustaches.jpg";
import imageFive from "../img/new-orleans.jpg";
import imageSix from "../img/scuba.jpg";
import imageSeven from "../img/washington-dc.jpg";
import imageEight from "../img/wedding-kiss.jpg";
import imageNine from "../img/halloween-couple.jpg";
import imageTen from "../img/engagement.jpg";
import imageEleven from "../img/christmas-bar.jpg";
import imageTwelve from "../img/wedding-laugh.jpg";
import imageThirteen from "../img/new-years.jpg";

const ChapterThree = (props) => {
  const paragraph = "It turned out that she felt the same way!";
  const paragraphTwo = "Happy Valentines Day, Nicole. <3"
  return (
    <div className="chapter chapter-three-b">
        <div className="chap-img-row">
          <img className="polaroid-mini animated flipInY" src={ imageOne } />
          <img className="polaroid-mini animated flipInX" src={ imageTwo } />
          <img className="polaroid-mini animated flipInY" src={ imageThree } />
          <img className="polaroid-mini animated flipInX" src={ imageFour } />
          <img className="polaroid-mini animated flipInY" src={ imageFive } />
          <img className="polaroid-mini animated flipInX" src={ imageSix } />
          <img className="polaroid-mini animated flipInY" src={ imageSeven } />
        </div>
        <div className="img-text-img">
          <div className="chap-img-column">
             <img className="polaroid-mini animated flipInX" src={ imageEight } />
             <img className="polaroid-mini animated flipInY" src={ imageNine } />
             <img className="polaroid-mini animated flipInX" src={ imageTen } />
          </div>
           <div className="chap-text animated fadeInUp">
              <h1>{ paragraph }</h1>
              <h2>{ paragraphTwo }</h2>
           </div>
           <div className="chap-img-column">
              <img className="polaroid-mini animated flipInY" src={ imageEleven } />
              <img className="polaroid-mini animated flipInX" src={ imageTwelve } />
              <img className="polaroid-mini animated flipInY" src={ imageThirteen } />
           </div>
         </div>
    </div>
  );
}

export default ChapterThree;
