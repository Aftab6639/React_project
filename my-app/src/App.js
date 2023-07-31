import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import Chilpar from './Components/chilpar';
// import State from './Components/state';
function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);
    const showAlert= (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }

   const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Drak mode has been enable", "success");
    }
   else{
      setMode('light');
      document.body.style.backgroundColor= 'white'
      showAlert("Light mode has been enable", "success");

    }
    }
  return (
  <>
 <NavBar title="TextiUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
<div className="container">
<TextForm showAlert={showAlert} heading="Enter the text to analyze Below " mode={mode}/>
{/* <About/> */}
</div> 
</>
  )
}
export default App;
