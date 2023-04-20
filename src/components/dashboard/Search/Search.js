import React, { useEffect, useState } from 'react'
import './Search.css';
const Search = ({searchText}) => {
    const [text, setText] = useState("");
   
    useEffect(()=>{
        searchText(text);
    },[text]);
 
    return (
    
    <input className="inp90" type="text"  onChange={(e)=>{
        setText(e.target.value);
    }} value={text} placeholder="Search coins" />
  )
}

export default Search;