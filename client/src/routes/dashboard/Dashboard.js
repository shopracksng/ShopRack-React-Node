import React from 'react';
import Navbar from '../../components/nav-seection/Navbar';
// import AuthContext from '../../context/auth/authContext';

const Dashboard = ({ toggle }) => {
  // const authContext = useContext(AuthContext);

  // const { isAuthenticated, logout, user } = authContext;
  // const onLogout = () => {
  // 	logout();
  // };

  // useEffect(() => {
  //   authContext.loadUser();
  //   // eslint-disable-next-line
  // }, []);

  // const authLinks = (
  // 	<>
  // 		<li>Hello {user && user.name}</li>
  // 		<li>
  // 			<a onClick={onLogout} href='#!'>
  // 				<i className='fas fa-sign-out-alt'>
  // 					{' '}
  // 					<span className='hide-sm'>Logout</span>
  // 				</i>
  // 			</a>
  // 		</li>
  // 	</>
  // );
  return (
    <div>
      <Navbar toggle={toggle} />
      {/* <ul>{isAuthenticated ? authLinks : ''}</ul> */}

      <div className='w-full'>
        <h1> Hello Folks...</h1>
      </div>
    </div>
  );
};

export default Dashboard;
