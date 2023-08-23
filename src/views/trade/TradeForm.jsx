import React, { useState,useEffect } from 'react';
import axios from 'axios';
const TradeForm = ({ selectedPair, onSubmitTrade }) => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitTrade(selectedPair, price, quantity);
    setPrice('');
    setQuantity('');
  };
  console.log("selectedPair",selectedPair)
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

  return (
    <div className="trade-form">
      <h3>Trade Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <button type="submit">Submit Trade</button>
      </form>
    </div>
  );
};

export default TradeForm;