import React from 'react';
const Card = () => {
  return (
    <div className='credit-card'>
      <div className='card-container'>
        <h1 className='credit-card-title'>CREDIT CARD</h1>

      </div>
      <img className='chip-pic' src='https://previews.123rf.com/images/miceking/miceking1603/miceking160300029/53109625-chip-of-credit-card-sim-card-chip.jpg' />
      <h3 className='credit-holder-number'>7253 3256 7895 1245</h3>
      <div className='credit-number-pic'> 
       
        <div className='credit-card-number'>
        <div className='credit-card-holder'>
          <h4>5422</h4>
          <h4>CARDHOLDER</h4>
        </div> 
        <div className='validity-card'> 
        <div> 
        <h6 className='valid'>VALID THRU </h6>
        </div>
        <div className='month-year'>
          <h6 className='m-y'>MONTH/YEAR</h6>
        <h3 className='valid-card'> 11/50</h3>
        
        </div>
        </div>
        </div>
        <div className='visa-master-card'>
          <img className='visa-master' src='https://krebsonsecurity.com/wp-content/uploads/2012/03/mcvisa.png' />
          
        </div>
        </div>
      
    </div>)
}
export default Card
