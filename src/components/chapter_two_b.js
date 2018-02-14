import React from "react";
import imageOne from "../img/parthenon.jpg";
import imageTwo from "../img/puzzle.jpg";
import imageThree from "../img/paintings.jpg";

const ChapterTwoB = (props) => {
  const paragraph = "Both loving to travel, they would sometimes take trips together to anywhere and everywhere within driving distance, from day trips to the beach, to Nashville’s Parthenon.  Sometimes, they would just hang out and watch movies, or old re-runs of Friends, and build puzzles.  When people would ask them why they weren’t dating, they’d simply say the other was their best friend. And this was a fine arrangement.";
  const paragraphTwo = "For a while...";
  return (
    <div className="chapter chapter-two">
         <div className="chap-text animated fadeIn">
            <p>{ paragraph }</p>
            <p>{ paragraphTwo }</p>
         </div>
         <div className="chap-img-column">
            <img className="polaroid-mini animated flipInX" src={ imageOne } />
            <img className="polaroid-mini animated flipInY" src={ imageTwo } />
            <img className="polaroid-mini animated flipInX" src={ imageThree } />
         </div>
    </div>
  );
}

export default ChapterTwoB;
