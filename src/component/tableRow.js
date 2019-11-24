import React from "react";
import PropTypes from 'prop-types';

import taskList from '../store/taskListStore';
import modalStore from '../store/modalStore';


import "./customicon.css";

const TableRow = (props) => {

    return (
          <tr onDoubleClick={ () => {modalStore.openChangeTaskModal(props.id)}}>
            <td>{props.id}.</td>
            <td>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="icon-custom-envelope"></i>
                </li>
                <li className="list-inline-item">{props.name}</li>
              </ul>
            </td>
            <td>{props.description}</td>
            <td className="text-center">
              <a
                href="index.html"
                onClick={e => {
                  e.preventDefault();
                  taskList.removeTaskByID(props.id);
                }}
              >
                <i className="icon-custom-delete"></i>
              </a>
            </td>
          </tr>
    );
  };

  TableRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  
  export default TableRow;