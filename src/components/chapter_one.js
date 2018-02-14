import React from "react";
import imageOne from "../img/Chilis.jpg";

const ChapterOne = (props) => {
  const chapterTitle = "Chapter One";
  const paragraph = "It all started when the two love birds met at a Chili’s Restaurant in their hometown.  She, Nicole, was a friend of a friend. He, Sawyer, was said friend’s best friend, and so socially awkward that he couldn’t order his Cowboy Burger without busting into fits of laughter.  In retrospect, perhaps he was nervous in the presence of a beautiful woman.";
  const paragraphTwo = "Or maybe... ";
  const paragraphThree = "...he was just that awkward...";
  return (
    <div className="chapter chapter-one">
         <div className="chap-text animated fadeIn">
            <p>{ paragraph }</p>
            <p>{ paragraphTwo }</p>
            <p>{ paragraphThree }</p>
         </div>
         <div className="chap-img">
            <img className="polaroid animated flipInY" src={imageOne} />
         </div>
    </div>
  );
}

export default ChapterOne;
