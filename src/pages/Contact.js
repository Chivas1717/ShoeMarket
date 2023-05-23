import React, {useRef, useState} from 'react';
import axios from "axios";

const Contact = () => {
  const [result, setResult] = useState('dwadwa');

  const formRef = useRef(null)
  const handleSubmit  = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8000/myproject1",
      {
        name: 'awdawdawdad'
      }
    )
    setResult(data)
  };

  return (
    <div className="wrapper-contact-form">
      <form ref={formRef} className="form"
            method="post"
            onSubmit={(event) => handleSubmit(event)}>
        <div className="pageTitle title">Contact Me</div>
        <div className="secondaryTitle title">Fill this form to contact Hudzovskyi Mark.</div>
        <input type="text" className="name formEntry" placeholder="Name"/>
        <input type="text" className="email formEntry" placeholder="Email"/>
        <textarea className="message formEntry" placeholder="Message"></textarea>
        <button className="submit formEntry" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;