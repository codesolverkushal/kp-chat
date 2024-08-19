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
const Notfound = lazy(()=>import("./pages/Notfound"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const MessageManagement = lazy(() => import("./pages/admin/MessageManagement"));

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
          <Route path = "/admin" element={<AdminLogin/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/users" element={<UserManagement/>}/>
          <Route path="/admin/groups" element={<ChatManagement/>}/>
          <Route path="/admin/messages" element={<MessageManagement/>}/>        

          <Route path='*' element={<Notfound/>}/>  
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
// import AdminLogin from './pages/admin/AdminLogin';

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