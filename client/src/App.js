import React, { useContext,useState, useEffect, useReducer } from 'react';
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
import UserInfo from './Pages/UserInfo';
import ParticularPost from './Pages/ParticularPost';
import Dashboard from './Pages/Admin/Dashboard';
import { useLocation } from 'react-router-dom';
import Users from './Pages/Admin/Users';
import EditUser from './Pages/Admin/EditUser';
import CreateUser from './Pages/Admin/CreateUser';
import ViewPost from './Pages/Admin/ViewPost';
import EditPost from './Pages/Admin/EditPost';

const Routing =()=>{
  const {state, dispatch} = useContext(UserContext)
  const history = useLocation()
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
    <>
    {
        !history.pathname.startsWith("/admin") && <Navbar/>
      }
    <Routes>
      
        <Route path='/' exact element={<Home/>}/>
        <Route path='/category/:name' element={<ParticularCategory/>}/>
        <Route path='/post/:id' element={<ParticularPost/>}/>
        <Route path='/signup' exact element={<SignUp/>}/>
        <Route path='/signin' exact element={<SignIn/>}/>
        <Route path='/resetpassword' exact element={<ResetPassword/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/blog/:id' exact element={<SinglePage/>}/>
        <Route path='/profile/:id' exact element={<UserInfo/>}/>
        <Route path={state ? '/profile' : "/signin"} exact element={<Profile/>}/>
        <Route path={state ? "/profile/write" : "/signin"} element={<Write/>}></Route>
        <Route path={state ? "/profile/write/edit/:id" : "/signin"} element={<EditWrite/>}></Route>
        <Route path={state ? "/profile/posts/:id" : "/signin"} element={<Posts/>}></Route>
        <Route path={state ? "/profile/edit" : "/signin"} element={<EditProfile/>}></Route>
        <Route path={state ? "/profile/delete" : "/signin"} element={<DeletePost/>}></Route>
        <Route path='/users/:id/verify/:token' exact element={<VerifyEmail/>}/>
        <Route path="/users/:id/resetpassword/:token" element={<NewPassword/>}></Route>

        {/* Admin Route */}
        <Route path="/admin" exact element={<Dashboard/>}></Route>
        <Route path="/admin/users" exact element={<Users/>}></Route>
        <Route path="/admin/users/:id" exact element={<EditUser/>}></Route>
        <Route path="/admin/users/create" exact element={<CreateUser/>}></Route>
        <Route path="/admin/posts" exact element={<ViewPost/>}></Route>
        <Route path="/admin/posts/:id" exact element={<EditPost/>}></Route>
        
        <Route path="*" element={<NotPage/>}></Route>
      </Routes>
      </>
  )
}


function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const [scrollBtn, setScrollBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
}, []);

const handleScroll = (e) =>{
    if(window.scrollY > 100){
        setScrollBtn(true)
    }else if (window.scrollY < 100) {
        setScrollBtn(false)
    }
  };
 const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      
      {/* <Navbar/> */}

      <Routing/>
      {/* <Foter/> */}
        <div role="button" onKeyUp={scrollTop} tabIndex="0" onClick={scrollTop} id="back-to-top" className={scrollBtn ? "back-btn-shown" : ""} >
          <i className="small material-icons" title="Go top">keyboard_capslock</i>
        </div>
    </BrowserRouter>
   </UserContext.Provider>
  );
}

export default App;
