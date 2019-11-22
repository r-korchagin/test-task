import React from 'react';
import Header from './header';
import Table from './table';

function Content (){
  
    return (
        <div className="container">
            <div className="row">
                <h3 className='display-4 text-center'>Task List</h3>
            </div>
            <div className="row">
                    <Header/>
                    <Table/>
            </div>
        </div>
    );
  }

  export default Content;