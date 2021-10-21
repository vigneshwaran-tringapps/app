
import axios from 'axios'
import { useEffect,useState } from 'react';
import './App.css';
import InputField from './components/inputfield/input';

function App() {
  
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  const api = async ()=>{
    axios.get('http://localhost:8000/api/rates')
    .then(res =>{
      const firstCurrency = Object.keys(res.data[0].rate)[0]
      setCurrencyOptions([...Object.keys(res.data[0].rate)])
      setFromCurrency(res.data[0].base)
      setToCurrency(firstCurrency)
      setExchangeRate((res.data[0].rate)[firstCurrency])
      
    })
  }
  useEffect(() => {
    api()
  }, [])
  

  return (
    <div className="container">
     <InputField 
     className="round-input"
     type="text"
     placeholder="welcome there"
     />
    </div>
  );
}

export default App;
