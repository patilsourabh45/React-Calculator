import logo from './logo.svg';
import Buttons from './Buttons'
import './button.css';
import { useState } from 'react';
import reactDom from 'react-dom';

const App =()=> {
  
    const [result, setResult] = useState("");
    
    const handleClick=(e)=>{
      setResult(result.concat(e.target.name));
    }

    const clear=(e)=>{
      setResult("");
    }
    
    const calculate=(e)=>{
      try{
        setResult(eval(result).toString());
      }
      catch(err){
        setResult("Error");
      }
    }

    return (
      <>
      <h1 style={{textAlign:'center'}}>ReactJs Calculator</h1>
      <div className="container">
      <form>
          <input type="text" value={result}></input><br></br><br></br>
          <input type="text" value={result}></input>
      </form> 
      <Buttons handle={handleClick}  cal={calculate} cle={clear}></Buttons> 
       </div>

  </>
  );
}

export default App;
