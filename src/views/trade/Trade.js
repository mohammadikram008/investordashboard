import React ,{useEffect,useState}from 'react'
import TradingPairSelector from './TradingPairSelector';
import OrderBook from './OrderBook';
import TradeForm from './TradeForm';
import { Fragment } from 'react';
import axios from 'axios';
import './Index.css'
const Trade = () => {
  const [tradingPairs, setTradingPairs] = useState([]);
  const [selectedPair, setSelectedPair] = useState('');
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);
  
  useEffect(() => {
    // Fetch trading pairs from Binance API
    const fetchTradingPairs = async () => {
      try {
        const response = await axios.get('https://api.binance.com/api/v3/exchangeInfo');
        const pairs = response.data.symbols.map((symbol) => symbol.symbol);
        setTradingPairs(pairs);
        console.log("pairs",pairs)
        setSelectedPair(pairs[0]); // Set the first trading pair as default
      } catch (error) {
        console.error('Error fetching trading pairs:', error);
      }
    };

    fetchTradingPairs();
  }, []);

  // Fetch order book for the selected trading pair (dummy data for demo)
  useEffect(() => {
    const fetchOrderBook = async () => {
      try {
        const response = await axios.get(`https://api.binance.com/api/v3/depth?symbol=${selectedPair}`);
        console.log("orderbook",response.data)
        setBids(response.data.bids);
        setAsks(response.data.asks);
      } catch (error) {
        console.error('Error fetching order book:', error);
      }
    };

    fetchOrderBook();
  }, [selectedPair]);

  // Function to handle trade submission (dummy implementation for demo)
  const handleTradeSubmit = (pair, price, quantity) => {
    console.log('Submitting trade:', pair, price, quantity);
  };
  return (
    
    <Fragment>
       <div className="App">
      {/* <h1>Binance Trade Page</h1> */}
      <TradingPairSelector tradingPairs={tradingPairs} selectedPair={selectedPair} onPairChange={setSelectedPair} />
      <OrderBook bids={bids} asks={asks} />
      <TradeForm selectedPair={selectedPair} onSubmitTrade={handleTradeSubmit} />
    </div>
    </Fragment>
  )
}

export default Trade