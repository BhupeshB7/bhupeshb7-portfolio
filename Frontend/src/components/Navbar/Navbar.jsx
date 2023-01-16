// import React from 'react'
// // import { images } from '../../constants/images'
// // import Logo from '../../assets/logo.png'
// import { HiMenuAlt4, HiX } from 'react-icons/hi'
// import { motion } from 'framer-motion'
// import './Navbar.scss'
// import { useState } from 'react'
// const Navbar = () => {
//     const [toggle, setToggle] = useState(true);
//     return (


//         <nav className="app__navbar">
//             <div className="app__navbar-logo">
//                 <img src=" https://www.freepnglogos.com/uploads/nature-png/logo-plant-branch-image-nature-31.png" height={"50px"} width={"100px"} alt="logo" />
//             </div>
//             <ul className="app__navbar-links">
//                 {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
//                     <li className="app__flex p-text" key={`link-${item}`}>
//                         <div />
//                         <a href={`#${item}`}>{item}</a>
//                     </li>
//                 ))}
//             </ul>
//             <div className='app__navbar-menu'>
//                 <HiMenuAlt4 onclick={() => setToggle(true)} />
//                 {toggle && (
//                     <motion.div
//                         whileInView={{ x: [300, 0] }}
//                         transition={{ duration: 0.85, ease: 'ease-in-out' }}
//                     >
//                         <HiX onclick={() => setToggle(false)} />
//                     </motion.div>
//                 )}
//             </div>
//         </nav>
//     )
// }

// export default Navbar\

import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png'
import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;