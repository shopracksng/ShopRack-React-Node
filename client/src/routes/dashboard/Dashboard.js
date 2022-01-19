import React from 'react';
import Navbar from '../../components/nav-seection/Navbar';

function Dashboard() {
  return (
    <div>
      <Navbar toggle={toggle} />

      <div className='w-full'>
        <h1> Hello Folks...</h1>
      </div>
    </div>
  );
}

export default Dashboard;
