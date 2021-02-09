import{ useState} from 'react'
import './App.css';
import Login from './login'
import Profile from './profile'
import { LoginContext } from './context/loginContext'

function App() {
  const [showProfile,setShowProfile] = useState(false)
  const [name,setName] = useState('');
  return (
    <div>
    context
    <LoginContext.Provider value={{name,setName,setShowProfile}}>
        {showProfile ? <Profile /> : <Login />}
    </LoginContext.Provider>
    
    </div>
    
  );
}

export default App;
