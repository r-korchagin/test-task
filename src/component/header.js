import React from 'react';

import './customicon.css';

function Header (){
  
    return (
        <div className="fixed-table-toolbar">
            <div className='pull-left'>
                <p className='lead'>Task List / 6 items</p>
            </div>
            <div className='pull-right'>
                <ul className="list-inline text-center align-items-center">
                    <li className="list-inline-item">Create new</li>
                    <li className="list-inline-item">
                        <a href="index.html" onClick = {e=>{e.preventDefault();}}>
                                    <i className="icon-custom-add"></i>
                        </a>
                    </li>
                </ul>
                
            </div>
            
        </div>
    );
  }

  export default Header;