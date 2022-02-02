import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {

  const [state, setState] = useState({
    name: "",
    company: "TTCS",
    gender: "Male"


  })

  function readableRandomStringMaker(length) {
    for (var s = ''; s.length < length; s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(Math.random() * 62 | 0));
    return s;
  }
  const Submit = () => {
    state._id = readableRandomStringMaker(9)

    axios.post("https://cryptic-everglades-50429.herokuapp.com/addData", state).then(data => {
      console.log(data["data"]);
    }).catch(err => {
      console.log(err);
    })



    console.log(state);

  }


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })

  };
  return <div className='container'>
    <h3 className='container my-3'>Hello User</h3>
    <div className='d-inline-flex my-2 mb-3'>

      <input type='text' className='mx-2' name='name' onChange={handleChange} />
      <button type="button" className="btn btn-primary btn-sm" onClick={Submit}>Add User</button>
    </div>
  </div>;
};

export default Add;
