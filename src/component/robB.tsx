import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartB (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>Building on foundational knowledge, this intermediate course focuses on developing the advanced technical and project management skills required to lead and execute complex automation projects. Participants will gain proficiency in advanced robotic architectures and embedded system optimization, adhering to industry best practices.</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Communication Protocols</li>
                        <li>Practical Project</li>
                        <li>Embedded Systems Design</li>
                        <li>Embedded System Programming</li>
                        <li>Advanced Microcontroller Programming</li>
                        <li>IoT and Embedded Systems</li>
                        <li>Robotics Mechanics and Control Systems</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartB