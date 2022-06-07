
import{BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import Dashboard from "./componants/home/Dashbord";
import DataChart from "./componants/home/DataChart";
import DataTable from "./componants/home/DataTable";
import DataUpload from "./componants/home/DataUpload";
import Home from './componants/home/Home';
import Navbar from "./componants/home/Navbar";
import SideNav from "./componants/home/SideNav";
import Login from './componants/login/Login';
import Signup from './componants/signup/Signup';


function App() {
  const user = localStorage.getItem("token")
  return (
    <>
    
    <BrowserRouter>
    
    <Routes>
    {user && <Route path="/" exact element={<Home/>}/> }
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/login" exact element={<Login/>}/> 
        <Route path="/studentdatatable" exact element={<DataTable/>}/> 
        <Route path="/"  element={<Navigate replace to="/login"/>}/> 
  
    </Routes>
    
    
    </BrowserRouter>


</>
  );
}

export default App;


































     {/* <Navbar/> */}
     {/* <DataUpload/> */}
     {/* <DataTable/> */}
     {/* <DataChart/> */}
     {/* <SideNav/> */}
    {/* <BrowserRouter>
      <Routes>
      {user && <Route path="/" exact element={<Home/>}/> }
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/login" exact element={<Login/>}/> 
        <Route path="/"  element={<Navigate replace to="/login"/>}/> 
      </Routes>
    </BrowserRouter> */}
      
    
