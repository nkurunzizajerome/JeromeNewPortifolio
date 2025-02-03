
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About';
// import Services from './component/Services';
// import Logo from "./assets/Logo.svg"
// import './index.css';
// import Jero from './component/Jero';
// function App() {
//   return (
//     <Router>
//       <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
//    <img src={Logo} alt="logo" />
//         <nav className="hidden md:flex space-x-4">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/about" className="hover:underline">About</Link>
//           <Link to="/services" className="hover:underline">Services</Link>
//           <Link to="/contact" className="hover:underline">Contact</Link>
//         </nav>
//         <button className="md:hidden p-2 bg-gray-700 rounded">Menu</button>
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<ContactM/>} />
          
//         </Routes>
//       </main>
//       <footer className="bg-gray-800 text-white text-center p-4">
//         <p>© 2024 My Website</p>
//       </footer>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import About from './component/About';
// Updated the import to match the ContactMe component
import Hero from './component/Hero';
import Logo from "./assets/Logo.svg";
import ContactMe from './component/ContactMe';
import Home from "./component/Home"
import './index.css';

function App() {
  return (
    <Router>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <img src={Logo} alt="logo" className="w-16" />
        <nav className="hidden md:flex space-x-4 hover:bg-blue-700">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/hero" className="hover:underline">Hero</Link>
        </nav>
        <button className="md:hidden p-2 bg-gray-700 rounded">Menu</button>
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2024 My Website</p>
      </footer>
    </Router>
  );
}

export default App;
