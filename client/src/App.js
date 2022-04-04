import React, { useContext, useEffect, useReducer } from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Carousel from './Component/Carousel';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ResetPassword from './Pages/ResetPassword';
import Contact from './Pages/Contact';
import SinglePage from './Pages/SinglePage';
import Profile from './Pages/Profile';
import VerifyEmail from './Pages/VerifyEmail';
import NewPassword from './Pages/NewPassword';
import { initialState, reducer } from './Context/reducer';
import { UserContext } from './Context/action';
import Write from './Pages/Write';
import DeletePost from './Pages/DeletePost';
import Foter from './Component/Footer';
import Posts from './Pages/Posts';
import EditProfile from './Pages/EditProfile';
import NotPage from './Component/404Page';
import EditWrite from './Pages/EditWrite';
import ParticularCategory from './Pages/ParticularCategory';

const Routing =()=>{
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    try{
      const user = JSON.parse(localStorage.getItem("user"))
        if(user){
          dispatch({type:"USER", payload:user})
        }
    }catch(error){
        console.log(error)
    }
    
  },[])
  return(
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/category/:name' exact element={<ParticularCategory/>}/>
        <Route path='/signup' exact element={<SignUp/>}/>
        <Route path='/signin' exact element={<SignIn/>}/>
        <Route path='/resetpassword' exact element={<ResetPassword/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/blog/:id' exact element={<SinglePage/>}/>
        <Route path={state ? '/profile' : "/signin"} exact element={<Profile/>}/>
        <Route path={state ? "/profile/write" : "/signin"} element={<Write/>}></Route>
        <Route path={state ? "/profile/write/edit/:id" : "/signin"} element={<EditWrite/>}></Route>
        <Route path={state ? "/profile/posts" : "/signin"} element={<Posts/>}></Route>
        <Route path={state ? "/profile/edit" : "/signin"} element={<EditProfile/>}></Route>
        <Route path={state ? "/profile/delete" : "/signin"} element={<DeletePost/>}></Route>
        <Route path='/users/:id/verify/:token' exact element={<VerifyEmail/>}/>
        <Route path="/users/:id/resetpassword/:token" element={<NewPassword/>}></Route>
        
        <Route path="*" element={<NotPage/>}></Route>
      </Routes>
  )
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <Navbar/>
      {/* <Carousel/> */}
      <Routing/>
      {/* <Foter/> */}
    </BrowserRouter>
   </UserContext.Provider>
  );
}

export default App;
