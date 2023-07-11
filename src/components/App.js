
import {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [cunt, setCount] = useState(0);
  function countClicks(){
    setCount(cunt + 1);
  }
     <div>
         return (
          <div>
            <p>Button clicked {count} times</p>
            <button onClick={countClicks}>Click me</button>
          </div>
        )
  );
     </div>
}

export default App
