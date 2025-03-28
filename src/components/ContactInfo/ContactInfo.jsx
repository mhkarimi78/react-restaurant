import React from 'react';
import { motion } from 'framer-motion';

function ContactInfo() {
  return (
    <motion.div 
      className='d-flex flex-column align-items-center'
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <h2 className='fs-1 mb-3 text-uppercase fw-bold'>کجا ما را پیدا کنید</h2>
        <p className='mb-5'>نخل زرین،‌پشت فروشگاه رفاه،‌جنب اداره کار و اشتغال</p>
        <p className='mb-5'>  گوگل مپ رستوران: <a href='https://maps.app.goo.gl/jXNVbLJ5iCZNUyqX6?g_st=aw' target="_blank" rel="noopener noreferrer">اینجا کلیک کنید</a></p>
        <h3 className='text-capitalize'>ساعات کاری</h3>
        <p className="m-0">شنبه - چهارشنبه: 22:00 - 09:00</p>
        <p>پنچ شنبه - جمعه: 20:00 - 10:00</p>
    </motion.div>
  )
}

export default ContactInfo;