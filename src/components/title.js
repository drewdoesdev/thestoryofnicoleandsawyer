import React from "react";

const Title = (props) => {
  const title = "The Story of Nicole & Sawyer";
  const subTitle = "A Love Story, in Eight Parts"
  return (
    <div className="title-text animated jackInTheBox">
        <h1 animated jackInTheBox>{ title }</h1>
        <h2>{ subTitle }</h2>
    </div>
  );
}

export default Title;
