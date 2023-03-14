import React from 'react'
import { useParams } from 'react-router-dom';
import stocks from './Data'
function Stock() {
    let {symbol} = useParams();
    let stock = stocks.find((element) => {
        return element.symbol === symbol;
    })
    console.log(stock)
  return (
    <div>
        <h1>Name:{stock.name}</h1>
        <h1>Symbol:{stock.symbol}</h1>
        <h1>High:{stock.high}</h1>
        <h1>Low:{stock.low}</h1>

    </div>
  )
}

export default Stock