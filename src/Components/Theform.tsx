

import React, {useState} from 'react';


function Theform() {

  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const checkEmail = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setEmail(e.target.value);
    if(regex.test(email)=== false){
      setError('Enter valid email adress ');
    }else{
      setError('')
      return true;
    }
    //alert('test');
  }

  const submit = () =>{
    if(email!==''){
      setMsg('Comment posted') 
      alert('Comment posted')
    }else{
      setError('Please enter email')
    }
  }
  return (
    <div className="theform">
    <div className="name-email">
          <label className="fnametext" htmlFor="Firstname"></label>
          <input className="fnameinput" type="text" id="fullName" placeholder="Fullname" required/>

          <label className="emailtxt-lower" htmlFor="Emailadress"></label>
          <input className="emailinput-lower" type="email" id="email" placeholder="Email" onChange={checkEmail} required />
          <p className="email-error">{error}</p>
          </div>

          
       
          <div className="comment-box">
          <label className="comments-lower" htmlFor="comments"></label>
          <textarea className="commentsinput-lower"  id="comments" placeholder="Comments"/>
          </div>

          <div>
              <button className="post-btn" type="submit" onClick={submit}>Post Comments</button>
          </div>
          <p>{msg}</p>
          <script src="all-letter.js"> </script>
  </div>
  );
}

export default Theform;
