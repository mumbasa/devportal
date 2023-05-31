import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard';
import useToken from './useToken';
import Login from './pages/login';


function App() {
  const { token, setToken } = useToken();
  const userdata = JSON.parse(sessionStorage.getItem('token'));

  const view = !token?<Login setToken={setToken}></Login>:<Dashboard></Dashboard>
    return (
      <>
  
    {view}
  
      </>
     
    );
}

export default App;
