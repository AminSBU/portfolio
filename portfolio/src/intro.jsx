import './intro.css'

function Intro()
{
    return(<>
        <div className='container'>
            <div className='left'>
                <h1 className="PortfolioName">Amin Bakhshoodeh</h1>
                <p className='paragraphText'>Embedded Software developer in MAPNA (MECO) as developing EV Chargers (240KW) CCS, GB, CHAdeMO</p>
            </div>
            <div className='right'>
                <img src='src/img/avatar.jpeg' className='imageClass'></img>
            </div>
        </div>

        
    </>);
}
export default Intro;