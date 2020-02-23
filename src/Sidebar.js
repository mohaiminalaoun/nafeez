import React from "react";

const Sidebar = props => {
  return (
    <div className={"sidebar " + props.animateOut}>
      <div className="item-ctr">
        <div className="item">Projects</div>
        <div className="item">Experience</div>
        <div className="item">Skills</div>
      </div>
    </div>
  );
};

export default Sidebar;
