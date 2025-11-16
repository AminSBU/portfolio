function Contact()
{
    return(
        <>
            <div className="form-container">
                <form className="form">
                    <div className="name-div">
                        <input type="text" placeholder="Your name ..." className="name-contact"></input>
                    </div>
                    <div className="mail-div">
                        <input type="mail" placeholder="Your email ..." className="mail-contact"></input>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;