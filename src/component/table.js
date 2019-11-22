import React from 'react';
import './customicon.css';

function Table (){
  
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th className='text-center'>Delete</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>1.</td>
                <td>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                                        <i className="icon-custom-envelope"></i>
                        </li>
                        <li className="list-inline-item">Earn Degree</li>
                    </ul>    
                </td>
                <td>dfgdfgdfgdfgdfgdfvxvx dfgdfgdfgdfgdfgdfvxvx dfgdfgdfgdfgdfgdfvxvx dfgdfgdfgdfgdfgdfvxvx dfgdfgdfgdfgdfgdfvxvx</td>
                <td className='text-center'>
                        <a href="index.html" onClick = {e=>{e.preventDefault();}}>
                            <i className="icon-custom-delete"></i>
                        </a>
                </td>
            </tr>
            </tbody>
        </table>
    );
  }

  export default Table;