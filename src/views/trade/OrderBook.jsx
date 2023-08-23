import React, { Fragment } from 'react';

const OrderBook = ({ bids, asks }) => {
    console.log("ask", asks, "bids", bids)
    return (
        <Fragment>
        <div className="order-book">
            <h3>Order Book</h3>
            
            <div className="bids">
                <h4>Bids</h4>
                <ul>
                    {bids.map((bid) => (
                        <li key={bid.price}>
                            Price: {bid[0]}, Quantity: {bid[1]}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="asks">
                <h4>Asks</h4>
                <ul>
                    {asks.map((ask) => (
                        <li key={ask.price}>
                            Price: {ask[0]}, Quantity: {ask[1]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </Fragment>
    );
};

export default OrderBook;