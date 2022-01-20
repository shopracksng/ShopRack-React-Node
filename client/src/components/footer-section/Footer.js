import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import FooterlistItem from './FooterlistItem';
import footerItems from './footerlinks.json';

import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa';
import {
  AiFillMediumCircle,
  AiFillInstagram,
} from 'react-icons/ai';

const Footer = () => {
  const { theme } = useTheme(); // Get theme colors

  return (
    <footer
      className='py-20min-h-0 w-full mt-20 relative'
      style={{
        backgroundColor: theme.primary.normal,
        color: theme.textcolor.black,
      }}>
      <div
        className='absolute w-screen h-full'
        style={{
          backgroundImage: "url('/img/vector.png')",
          backgroundSize: 'cover',
        }}></div>
      <div className='md:flex container mx-auto md:p-12 relative z-20'>
        <div className='w-full md:w-1/3 flex flex-col p-8'>
          <div className='w-full min-h-0 flex items-center space-x-2'>
            <img
              src='/img/logo.svg'
              className='w-12 h-12 rounded-full bg-white'
              alt='logo'
            />
            <h2 className='text-4xl font-bold text-white my-5'>
              ShopRacks
            </h2>
          </div>
          <p>
            A tracking and management app ideal for
            documenting inventories and invoices. You can
            also keep track and manage your products, orders
            and deliveries.
          </p>
          <small className='mt-6'>
            &copy; ShopRacks LTD 2022. All rights reserved
          </small>
          <div
            className='flex space-x-2 pt-2'
            style={{ color: theme.textcolor.light }}>
            <a href='https://twitter.com/shopracksng'>
              {' '}
              <FaTwitter size={30} />{' '}
            </a>
            <a href='https://www.facebook.com/shopracksng'>
              <FaFacebook size={30} />
            </a>
            <a href='https://medium.com/@ShopRacksng'>
              <AiFillMediumCircle size={30} />
            </a>
            <a href='https://www.instagram.com/shopracksng/'>
              <AiFillInstagram size={30} />
            </a>
            <a href='https://www.linkedin.com/company/shopracksng/'>
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        <div
          className='flex w-full md:w-2/3 p-8'
          style={{ color: theme.textcolor.light }}>
          {footerItems &&
            footerItems.map((category) => (
              <div
                className='w-full sm:w-1/2 md:w-1/3 flex md:justify-end mt-10 md:mt-0'
                key={category.title}>
                <FooterlistItem category={category} />
              </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
