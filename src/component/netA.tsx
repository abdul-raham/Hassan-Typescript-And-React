import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartA (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>In order to facilitate data sharing and process automation, the Networking and IoT course teaches students how systems and devices connect and communicate over networks. By integrating hardware, software, and sensors, IoT expands on networking principles to produce "smart" systems. These technologies are crucial in areas like smart homes, healthcare, transportation, agriculture, and industrial automation</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Basics of Computer Networking</li>
                        <li>OSI and TCP/IP Models</li>
                        <li>Networking Commands and Tools</li>
                        <li>Advanced Networking Concepts</li>
                        <li>Wireless Networking</li> 
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartA