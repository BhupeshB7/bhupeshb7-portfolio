// import React, { useEffect, useState } from 'react';

// import { About, Footer, Header, Skills, Work } from './container/index';
// import Navbar from './components/Navbar/Navbar';
// import './App.scss'
// import FooterBottom from './container/FooterBottom/FooterBottom';


// import Login from './components/Login/Login';
// import Home from './components/Home/Home';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   useEffect(() => {
//     const storedUserLoggedInInfromation = localStorage.getItem('isLoggedIn');

//     if (storedUserLoggedInInfromation === '1') {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem('isLoggedIn', '1');

//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('isLoggedIn')
//   };

//   return (
//     <div className='app'>
//       <React.Fragment>
//         <Navbar />
//         <Header />
//         <About />
//         <Work />
//         <Skills />
//         <Footer />
//         <FooterBottom />
//         <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//         <main>
//           {!isLoggedIn && <Login onLogin={loginHandler} />}
//           {isLoggedIn && <Home onLogout={logoutHandler} />}
//         </main>
//       </React.Fragment>
//     </div>
//   );
// }

// export default App;


import React from 'react';

// import { About, Footer, Header, Skills, Testimonial, Work } from './container';
// import { Navbar } from './components';
// import './App.scss';
import { About, Footer, Header, Skills, Work } from './container/index';
import Navbar from './components/Navbar/Navbar';
import './App.scss'
import FooterBottom from './container/FooterBottom/FooterBottom';
const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
    <FooterBottom />
  </div>
);

export default App;