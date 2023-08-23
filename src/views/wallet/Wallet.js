import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './Index.css'
import { Col, Row } from 'reactstrap';
// import { getIcon } from 'cryptocurrency-icons';
const Wallet = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchSymbol, setSearchSymbol] = useState('');
  useEffect(() => {
    // Your Binance API URL here
    const apiUrl = 'http://localhost:3005/api/ticker';
    // Your Binance API key here
    const apiKey = 'eS6O0tPuXueGE0ipLrgPbcpJIOqJHPiahMK1gIGOSDJ553eL5p4ScBrIp5iWxVQk';
    // Fetch data from Binance API
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: { 'X-MBX-APIKEY': apiKey },
        });
        setCryptoData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleSearchChange = (e) => {
    setSearchSymbol(e.target.value.toUpperCase());
  };
  // Filter the crypto list based on the search symbol
  const filteredCryptoData = cryptoData.filter((crypto) =>
    crypto.symbol.substring(0, 3).includes(searchSymbol)
  );
  return (
    <Fragment>
      {/* <div className=' imagine-card'> */}
      <div className="search-container">
        <h2>Cryptocurrency List</h2>
        <div className='searchbar'>
          {/* <label>Search by Symbol:</label> */}
          <input type="text" placeholder='Search by Symbol' value={searchSymbol} onChange={handleSearchChange} />
        </div>
      </div>
      <Row className='m-0 '>
        {filteredCryptoData.map((crypto, index) => (
          <Col md='8' className='imagine-card' key={index}>
            <div className="imagine-card-head">
              <div className="imagine-card-logo">
                {/* <img src={`./icons/${crypto.symbol.toLowerCase()}.svg`} alt={crypto.symbol} /> */}
                <img src="https://invest.websaro.com/public/upload/coinlist/1659957309_3866ca14ca6b8408d706.png" alt="Bitcoin" />
              </div>
              <div>
                <div className="imagine-card-name"> {crypto.symbol.substring(0, 3)}/{crypto.symbol.substring(3,)}</div>
                {/* <div className="imagine-card-date">Bitcoin</div> */}
              </div>
            </div>
            <div className="imagine-card-bottom">
              <div className="imagine-card-chart">
                {/* <!-- <span className="bdtasksparkline value_graph" id="GRAPH_BTC"></span> --> */}
                <span className="Percent down" id="LASTPRICE_BTC">${crypto.lastPrice}</span>
              </div>
              <div>
                <div className="imagine-card-change">
                  <span className="Percent down" id="CHANGE24HOURPCT_BTC"> {crypto.priceChangePercent}%</span>
                  <div className="imagine-card-points">
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {/* </div> */}
    </Fragment>
  )

}

export default Wallet