import './intro.css'
import Menu from './Menu.jsx'

function Intro()
{
    return(<>
        <Menu />
        <div className='container'>
            <div className='left'>
                <h1 className="PortfolioName">Amin Bakhshoodeh</h1>
                <p className='paragraphText'>As an experienced Embedded Software Engineer 
                                            with over 8 years in electronic design and engineering, 
                                            I have a proven track record of delivering innovative 
                                            solutions in the electrical and electronic manufacturing industry. 
                                            My strong background in C/C++, STM32 (Cortex-M4, Cortex-M7), ARM Architecture, 
                                            and Printed Circuit Board (PCB) Design allows me to contribute effectively 
                                            to diverse projects, enhancing system performance and functionality.</p>

                <button className='resumeBtn'>See CV !</button>
            </div>
            <div className='right'>
                <img src='src/img/avatar.jpeg' className='imageClass'></img>
            </div>
            <div className='allresumeBtn'>
                
            </div>
        </div>

        
    </>);
}
export default Intro;