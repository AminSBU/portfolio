import './Contact.css'

export default function Contact()
{
    return(<>
        <div className="contact-container">
            <form>
                <div className="name-div"><input type="text" placeholder="Enter Your name ..."></input></div>
                <div className="mail-div"><input type="text" placeholder="Enter Your email ..."></input></div>
                <div className="message-div"><input type="text" placeholder="Enter Your message ..." className='message-input'></input></div>
            </form>    
        </div>
    </>);
}