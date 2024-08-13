import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layout/Loaders';
import Test from './test/Test';


// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));

let user = true; // Example user state

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/test' element={<Test/>}></Route>

          </Route>
          <Route path='/login' element={<ProtectRoute user={!user} redirect='/'><Login /></ProtectRoute>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;


















// import React,{lazy} from 'react';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import ProtectRoute from './components/auth/ProtectRoute';

// const Home = lazy(()=>import("./pages/Home"));
// const Login = lazy(()=>import("./pages/Login"));
// const Chat = lazy(()=>import("./pages/Chat"));
// const Groups = lazy(()=>import("./pages/Groups"));
// const Notfound = lazy(()=>import("./pages/Notfound"));

// let user = true;

// const App = () => {
//   return (
//     <BrowserRouter>
       
//       <Routes>
//          <Route element={<ProtectRoute user={user}/>}>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/chat/:chatId' element={<Chat/>}/>
//             <Route path='/groups' element={<Groups/>}/>
//          </Route>
//          <Route path='/login' element={<ProtectRoute user={!user} redirect='/'><Login/></ProtectRoute>}/>
//          <Route path='*' element={<Notfound/>}/>  
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App