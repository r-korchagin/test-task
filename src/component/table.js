import React from "react";
import { observer } from "mobx-react";

import TableRow from './tableRow';
import taskList from '../store/taskListStore';

const Table = () => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th className="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        {taskList.taskList.map((el,index) => { 
            return(
                <TableRow 
                    key = {index}
                    id={el.id} 
                    name={el.name} 
                    description={el.description}/>  
            )}
        )}
      </tbody>
    </table>
  );
};

export default observer(Table);
