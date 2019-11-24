import React from "react";
import CreateModal from "./modalNewTask";
import ChangeModal from './modalChange';

import { observer } from "mobx-react";

import modalStore from '../store/modalStore';
import taskList from '../store/taskListStore';

import "./customicon.css";

const Header = () => {
  const createNew = event => {
    event.preventDefault();
    modalStore.openNewTaskModal();
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="float-left">
        <p className="lead">Task List / {taskList.getTaskCount} items</p>
        </div>
        <div className="float-right">
          <ul className="list-inline text-center align-items-center">
            <li className="list-inline-item">Create new</li>
            <li className="list-inline-item">
              <a href="index.html" onClick={createNew}>
                <i className="icon-custom-add"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <CreateModal/>
      <ChangeModal/>
    </div>
  );
};

export default observer(Header);
