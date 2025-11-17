import { useState } from 'react';
import './Contact.css'

function Contact()
{
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, mail, message });
        // Add your form submission logic here
    };

    const clearForm = () => {
        setName("");
        setMail("");
        setMessage("");
    };

    return(
        <>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="name-div">
                        <input 
                            type="text" 
                            placeholder="Your name ..." 
                            className="name-contact" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mail-div">
                        <input 
                            type="email" 
                            placeholder="Your email ..." 
                            className="mail-contact"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mail-div">
                        <textarea 
                            className="message-contact" 
                            placeholder="Write your message ..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="button-div">
                        <button type="submit" className="send-button">Send</button>
                        <button type="button" className="clear-button" onClick={clearForm}>Clear</button>
                    </div>

                </form>
                <div className='others'>
                    <div className='linkedin-profile'>
                        <a href="https://www.linkedin.com/in/amin-bakhshoodeh/" className="fa fa-linkedin" style={{ color: 'white', fontSize: '1.5rem' }}> Amin Bakhshoodeh</a>
                    </div>
                    <div className='email-address'>
                        <i class="fa fa-envelope"> omid.elc88@gmail.com</i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;