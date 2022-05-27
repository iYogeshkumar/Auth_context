import './App.css';
import Navbar from './components/Navbar'
import {AuthContextProvider} from './context/AuthContext';
import Displayuser from './components/Displayuser'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar/>
      <Displayuser/>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
