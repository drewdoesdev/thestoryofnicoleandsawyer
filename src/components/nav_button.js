import React from 'react';

const NavButton = (props) => {
  return (
    <div onClick={props.nextChapter} className="next-chapter">
       <i className="fa fa-angle-down" aria-hidden="true"></i>
    </div>
  );
}

export default NavButton;
