import React from "react";
import background from '../img/clairvoyant.jpg';

const ChapterFourB = (props) => {

  let background = {
    backgroundImage: {background},
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const paragraph = "And then, the luckiest thing that would ever happen to Sawyer, happened.";

  return (
    <div className="chap-background-image" style={background}>
        <p>{ paragraph }</p>
    </div>
  );
}

export default ChapterFourB;
