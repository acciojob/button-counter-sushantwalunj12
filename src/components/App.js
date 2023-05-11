
import {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [cunt, setCount] = useState(0);
  function countClicks(){
    setCount(cunt + 1);
  }
        return (
          <div>
            <p>Button clicked {count} times</p>
            <button onClick={countClicks}>Click me</button>
          </div>
        )
  )
}

export default App
