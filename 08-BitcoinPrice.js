import { useState, useEffect } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);

  const onChange = (event) => setDollar(event.target.value);


  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
    
  }, []);
  return (
    <div>
      <h1> 코인! ({coins.length})</h1>
      <div>
        <label htmlFor="dollar">달러 입력 </label>
        <input id = "dollar" value = {dollar} onChange={onChange}/>
      </div>

      {loading ? <strong>Loading...</strong> : 
      <select>
        {coins.map((coin) => 
        (<option key={coin.id}>{coin.name} ({coin.symbol}) : {dollar / coin.quotes.USD.price} ({coin.symbol})</option>)
        )}
      </select>
      }
      
    </div>
  );
}

export default App;
