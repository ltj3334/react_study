import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setkeyword] = useState("");
  
  const onChange = (event) => setkeyword(event.target.value);
  const onClick = () => setCounter((prev) => prev + 1);
  

  useEffect(()=> {console.log("Run just one!")},[])
  useEffect(()=> {console.log("counter!")},[counter])
  useEffect(()=> {console.log("keyword!")},[keyword])
  useEffect(()=> {console.log("Counter & keyword!")},[keyword,counter])

  return (
    <div>
      <div>
        <h1 className={styles.title}>{counter}</h1>
        <Button text={"Click Me"} onClick = {onClick} />
      </div>
      <div>
        <input value={keyword}
        type = "text"
        onChange={onChange}
        placeholder="type word"/>
      </div>
    </div>

  );
}

export default App;
