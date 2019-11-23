import React from "react";
import CreateModal from "./modal";

import "./customicon.css";

const Header = () => {
  const createNew = event => {
    event.preventDefault();
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="float-left">
          <p className="lead">Task List / 6 items</p>
        </div>
        <div className="float-right">
          <ul className="list-inline text-center align-items-center">
            <li className="list-inline-item">Create new</li>
            <li className="list-inline-item">
              <a href="#" onClick={createNew}>
                <i className="icon-custom-add"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <CreateModal/>
    </div>
  );
};

export default Header;
