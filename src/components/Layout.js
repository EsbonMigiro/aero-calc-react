import React from 'react';
// import MachineTool from './MachineTool';
import Footer from './Elements/Footer';
import 'tailwindcss/tailwind.css'; // Make sure to import Tailwind CSS styles
import {NavigationBar} from './Elements/NavigationBar';
import { Routing } from '../Routing';

function Layout() {
  return (
    <div className="overflow-hidden"> {/* Apply the 'overflow-hidden' class here */}
     <NavigationBar></NavigationBar>
   
    {/* <MachineTool /> */}
    <Routing></Routing>
    <Footer />

    
    </div>
  );
}

export default Layout;


// import Aeroform from './aero/Aeroform'
// <Aeroform></Aeroform>


// import ComputeForm from './compute/ComputeForm'
// import Sidebar from './Sidebar'
// <ComputeForm></ComputeForm>
// <Sidebar></Sidebar>

// import Navbar from './Navbar'
// // import DisplayDataFromDjango from './DisplayDataFromDjango'
// import Sidebar from './Sidebar'
// import Iframe from './Iframe'


// <div >
//       <div className="flex flex-col w-full">
//       <Navbar />
//       </div>
//      <Sidebar></Sidebar>
//       <div className=' p-20 left-100 top-70 text-white overflow-hidden' >
//             {/* <h1>Display Data From Djangp</h1>
        
//           <DisplayDataFromDjango></DisplayDataFromDjango> */}
//           <Iframe/>
//       </div>
//       </div>