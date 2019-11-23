import React from 'react';
import Header from './header';
import Table from './table';

const Content = () => {
  
    return (
        <div className="container">
            <h3 className='display-4 text-center'>Task List</h3>    
            <Header/>
            <Table/>
        </div>
    );
  }

  export default Content;