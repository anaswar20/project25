import React, { useState } from 'react'
import './Product.css'
const Product = () => {
    const [pr,setPr]=useState('');
    const [pid,setPid]=useState('');
    const [pro,setPro]=useState('');
    const [pri,setPri]=useState('');
    const [qty,setQty]=useState('');
    
    const readproduct=(event)=>{
        setPr(event.target.value);
        console.log(event.target.value);
    }

    const readproductid=(event)=>{
        setPid(event.target.value);
        console.log(event.target.value);
    }




    const readproductname=(event)=>{
        setPro(event.target.value);
        console.log(event.target.value);
    }

    const readproductprice=(event)=>{
        setPri(event.target.value);
        console.log(event.target.value);
    }

    const readproductquantity=(event)=>{
        setQty(event.target.value);
        console.log(event.target.value);
    }


  return (
    <div className='po'>
      <h1>product page</h1>
      <form>
        product<input type='text' onChange={readproduct}/><br/><br/>
        productid <input type="text" onChange={readproductid}/><br/><br/>
        pname<input type="text"onChange={readproductname}/><br/><br/>
        price<input type="text"onChange={readproductprice}/><br/><br/>
        quantity<input type="number"onChange={readproductquantity}/><br/><br/>
        <button type="submit">SUB</button>
      </form>
    </div>
  )
}

export default Product
