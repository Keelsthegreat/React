import React from 'react'
import stocks from './Data'
function Dashboard() {
    // console.log(stocks)
  return (
    <div>
        <h1>All stocks</h1>
        <ul>
            {stocks.map((stock) =>{
                return(
                    
                    <li><a href={`/stocks/${stock.symbol}`}>{stock.name}</a></li>  

                )
            }) }

        </ul>
    </div>
  )
}

export default Dashboard