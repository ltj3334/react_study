import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect} from "react";




function App() {

  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  }
  
  return (
    <div>
      {showing ? <Hello /> : null}
      <Button text = {showing ? "Hide" : "Show"} onClick = {onClick} />
    </div>

  );
}

function Hello() {
  function byFn() {
    console.log("Bye :(")
  }
  function HiFn() {
    console.log("CREATED ! :)");
    return byFn;
  }
  useEffect(HiFn, []);

  return (
    <div>  
      <h1> Hello </h1>
    </div>
  );
}

export default App;
