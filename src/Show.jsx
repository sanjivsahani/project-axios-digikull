import  React,{useState} from 'react';
import axios from 'axios'

const Show = () => {
    const [rows,setRows]=useState([]);
    
    axios.get("https://cryptic-everglades-50429.herokuapp.com/getData").then(data=>{
            setRows(data["data"]);

        console.log(data["data"]);
        }).catch(err=>{
          
          console.log(err);
        })

  return <div className='container px-5'>
    
    {
        rows.map((row)=>{
            if(row.name && row.company && row.gender!=''){

                return <h6  className='container border border-dark my-2'>{row.name} </h6>
            }
        })
    }
          

    
  </div>;
};

export default Show;
