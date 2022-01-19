import React, {
  useState,
  useEffect,
  useContext,
} from 'react';
import Button from '../../components/button-component/Button';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Signup = (props) => {
  const { theme } = useTheme();
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { register, error, clearErrors, isAuthenticated } =
    authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const { firstname, lastname, email, password } = user;

  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      password === ''
    ) {
      setAlert('Please enter all fields', 'danger');
    } else {
      register({
        firstname,
        lastname,
        email,
        password,
      });
    }
  };

  return (
    <div className='h-screen flex justify-between items-center'>
      <div
        style={{
          background: theme.secondary.light,
          color: theme.textcolor.light,
        }}
        className='hidden md:flex w-2/4 h-screen  flex-col justify-center items-center'>
        {/* <div className=' pl-0'>
          <img src='/img/shoprack-inventory.svg' alt='' />
        </div> */}
        <div className='px-10 pt-32 '>
          <div className='px-20'>
            <img src='/img/white-quotes.svg' alt='' />
          </div>
          <div className='px-20'>
            <p className='pt-14 pb-5 text-center'>
              ShopRacks, as a business solution leverages on
              technology to facilitate the core aspect of
              your online store. We provides a platform for
              you to easily document, send and track
              invoices. You can also manage and track
              inventories, orders and deliveries seemlessly
            </p>
            <p className='pb-5 text-center'>
              Shopracks, Nigeria
            </p>
            <p className='pt-48 text-center'>
              OTHER FINANCE PRODUCTS
            </p>
            <div className='flex justify-between pt-8'>
              <p>Shopracks Subscriptions</p>
              <p>Shopracks Expenses</p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col justify-center items-center w-full md:w-2/4 px-8 '>
        {/* {message?.success && (
          <p className='bg-green-600 text-white p-10 absolute top-0 -mt-20 w-full text-center'>
            {message.success}
          </p>
        )} */}

        <div className='pb-5'>
          <img src='/img/shoprack-logo.svg' alt='' />
        </div>
        <form
          action=''
          onSubmit={onSubmit}
          className='flex flex-col'>
          <div>
            <input
              type='text'
              placeholder='First Name..'
              name='fistname'
              value={firstname}
              onChange={onChange}
              required
              className='p-4 rounded-full outline-none w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Last Name'
              name='lastname'
              value={lastname}
              onChange={onChange}
              required
              className='p-4 mt-5 rounded-full outline-none w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
              className=' p-4 mt-5 focus:border-2 rounded-full w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={onChange}
              required
              minLength='6'
              className=' p-4 mt-5 focus:border-2 rounded-full w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>

          <div className='flex justify-around items-center py-5'>
            <input type='checkbox' />
            <p className='pl-2'>
              I agree to the Terms of Service and Privacy
              Policy.
            </p>
          </div>

          <Button text='SIGN UP' background type='submit' />

          <p className='px-7 py-3'>
            Already have a Shopracks account?
            <Link
              to='/signin'
              style={{
                color: theme.primary.dark,
              }}>
              &nbsp; Sign In
            </Link>
          </p>
          <p className='text-center py-7'>
            Forgot Password??
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
