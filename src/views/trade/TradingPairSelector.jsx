import React from 'react';
const TradingPairSelector = ({ tradingPairs, selectedPair, onPairChange }) => {
    return (
      <div className="trading-pair-selector">
        <label>Select Trading Pair:</label>
        <select value={selectedPair} onChange={(e) => onPairChange(e.target.value)}>
          {tradingPairs.map((pair) => (
            <option key={pair} value={pair}>
              {pair}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default TradingPairSelector;