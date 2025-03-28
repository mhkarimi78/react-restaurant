import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear])
    }, []);

  return (
    <footer className='bg-body-tertiary' id='footer'>
        {/* <p className='p-3 m-0 text-center'>کپی رایت &copy; ساخته شده توسط <Link to='https://www.ionutcora.com/' style={{textDecoration: 'none', color: '#000000'}} target="_blank">ایونت کوره</Link>, 2021-{newDate}</p> */}
    </footer>
  )
}

export default Footer;