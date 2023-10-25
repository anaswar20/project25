import React,{useState} from 'react'
import './Book.css'

const Book = () => {
    const [bid,setBid]=useState('');
    const [bn,setBn]=useState('');
    const [pri,setPri]=useState('');
    const [gnr,setGnr]=useState('');

    const readbookid=(event)=>{
        setBid(event.target.value);
        console.log(event.target.value);
    }
    const readbookname=(event)=>{
        setBn(event.target.value);
        console.log(event.target.value);
    }


    const readbookprice=(event)=>{
        setPri(event.target.value);
        console.log(event.target.value);
    }    


    const readbookgenre=(event)=>{
        setGnr(event.target.value);
        console.log(event.target.value);
    }    
  return (
    <div className='bo'>
        <h1>Book page</h1>
      <form>
        bookid <input type="text"onChange={readbookid}/><br/><br/>
        bname<input type="text"onChange={readbookname}/><br/><br/>
        price<input type="text"onChange={readbookprice}/><br/><br/>
        genre<input type="text"onChange={readbookgenre}/><br/><br/>
        <button type="submit">SUBMIT</button>
      </form> 

      
    </div>
  )
}

export default Book
