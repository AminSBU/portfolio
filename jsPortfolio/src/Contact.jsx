import { useState } from 'react';
import './Contact.css'

function Contact()
{
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState("");

    const clearButtonHandler = () => {
        setFormData("");
        setName("");
    }

    return(
        <>
            <div className="form-container">
                <form className="form">
                    <div className="name-div">
                        <input type="text" placeholder="Your name ..." className="name-contact" value={name} ></input>
                    </div>
                    <div className="mail-div">
                        <input type="mail" placeholder="Your email ..." className="mail-contact"></input>
                    </div>
                    <div className="mail-div">
                        <textarea className="message-contact" placeholder="Write your message ..."></textarea>
                    </div>
                    <div className="button-div">
                        <button className="send-button" onClick={clearButtonHandler}>Send</button>
                        <button className="clear-button">Clear</button>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Contact;