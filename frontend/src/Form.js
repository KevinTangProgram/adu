import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navigationbar';
import Footer from './footer';

export default function Form() {

    window.scrollTo(0, 0);

    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientMessage, setClientMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleChangeName = (event) => {setClientName(event.target.value);}
    const handleChangeEmail = (event) => {setClientEmail(event.target.value);}
    const handleChangeMessage = (event) => {setClientMessage(event.target.value);}

    function sentForm()
    {
        if (sent)
        {
            return (
                <div style={{"display": "grid", "height": "50vh"}}>
                    <h1 style={{"textAlign": "center", "marginTop": "50px"}}>Thank you for your question. We will get back to you as soon as possible!</h1>
                    <a href="/"><h3 style={{"textAlign": "center"}}>Click here to be directed back to the home page</h3></a>
                </div>
            )
        }
        else
        {
            return (
                <div className="contactTable">
                    <p1>Name</p1>
                    <input placeholder="Name" style={{"marginBottom": "10px"}} value={clientName} onChange={handleChangeName}></input>
                    <p1>Email</p1>
                    <input placeholder="Email" style={{"marginBottom": "10px"}} value={clientEmail} onChange={handleChangeEmail}></input>
                    <p1>Message</p1>
                    <textarea placeholder="Message" resize="none" value={clientMessage} onChange={handleChangeMessage}></textarea>
                    <button  className="redButton" id="contactUsButton" onClick={() => {
                        axios.post("http://localhost:8080/sendemail", {
                            name: clientName,
                            email: clientEmail,
                            message: clientMessage,
                        })
                        .then((response) => {
                            setClientName("");
                            setClientEmail("");
                            setClientMessage("");
                            setSent(true);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    }}>Send</button>
                </div>
            )
        }
    }

    return (
        <>
            <Navbar/>
            <h1 className="centerHorizontally">Contact Us</h1>
            {sentForm()}
            <Footer/>
        </>
    )
}