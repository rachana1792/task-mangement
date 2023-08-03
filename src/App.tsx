// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {ThemeProvider, AccessibilityProvider, List} from '@phork/phorkit'

import '@phork/phorkit/styles/normalize.css';
import '@phork/phorkit/styles/fonts.css';
import '@phork/phorkit/styles/common.css';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <ThemeProvider themeId={'light'|'dark'}>
//     <AccessibilityProvider>

//     <List
//   color="primary"
//   items={[
//     {
//       id: 'normal0',
//       label: 'Normal'
//     },
//     {
//       id: 'selected',
//       label: 'Selected',
//       selected: true
//     },
//     {
//       id: 'normal1',
//       label: 'Normal'
//     },
//     {
//       id: 'normal2',
//       label: 'Normal'
//     },
//     {
//       id: 'normal3',
//       label: 'Normal'
//     },
//     {
//       highlighted: true,
//       id: 'highlighted',
//       label: 'Highlighted'
//     },
//     {
//       disabled: true,
//       id: 'disabled',
//       label: 'Disabled'
//     },
//     {
//       id: 'inactive',
//       inactive: true,
//       label: 'Inactive'
//     }
//   ]}
//   size="medium"
//   style={{
//     width: 300
//   }}
//   variant="bordered"
// />
//     </AccessibilityProvider>
//   </ThemeProvider>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import KarenBoard from './pages/KanbanBoard/KarenBoard';
import AllProjects from './pages/AllProjects/AllProjects';
import MyProjects from './pages/MyProjects/index';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/board" element={<KarenBoard />}></Route>
          <Route path="/all" element={<AllProjects />}></Route>
          <Route path="/myProjects" element={<MyProjects />}></Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

///chat/:userName/:roomId

export default App;
