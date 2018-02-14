import React from "react";
import imageOne from "../img/beach.jpg";
import imageTwo from "../img/halloween.jpg";
import imageThree from "../img/kts-graph.jpg";

const ChapterThree = (props) => {
  const paragraph = "Turns out it’s no easy feat to endlessly have amazing times with a stunningly gorgeos woman, who you seem to have a cosmic levels of chemistry with, and -not- fall head over heels for her.  And before he knew it, Sawyer found himself being that old cliche of of the guy hopelessly infatuated with his best friend.  For months he kept these feelings to himself, knowing that fessing up to Nicole would probably mean the end of a relationship that meant everything to him.";
  return (
    <div className="chapter chapter-two">
         <div className="chap-text">
            <p>{ paragraph }</p>
         </div>
         <div className="chap-img">
            <img className="polaroid animated flipInX" src={ imageThree } />
         </div>
    </div>
  );
}

export default ChapterThree;
