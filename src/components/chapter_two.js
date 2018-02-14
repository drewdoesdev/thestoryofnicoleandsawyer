import React from "react";
import imageOne from "../img/troy.jpg";
import imageTwo from "../img/beach.jpg";
import imageThree from "../img/halloween.jpg";

const ChapterTwo = (props) => {
  const paragraph = "When their friends started dating, they began to see a lot more of each other, and quickly began to hang out one on one.  They would convene at the local Barnes & Nobles for, “Writers Meets”, where they would spend about 10% of their time talking the books they were working on, and 90% of the time talking about everything ells.  They would even dream of writing their own story together one day..."
;

  return (
    <div className="chapter chapter-two">
         <div className="chap-text animated fadeIn">
            <p>{paragraph }...<mark>foreshadowing...</mark></p>
         </div>
         <div className="chap-img-column">
            <img className="polaroid-mini animated flipInY" src={ imageOne } />
            <img className="polaroid-mini animated flipInX" src={ imageTwo } />
            <img className="polaroid-mini animated flipInY" src={ imageThree } />
         </div>
    </div>
  );
}

export default ChapterTwo;
