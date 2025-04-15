import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartA(){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>Our beginner-level Robotics and Embedded Systems course provides a foundational understanding of robotic systems and specialized computing devices. Participants will explore the basics of robot design, construction, and operation across various industries, while also learning how embedded systems function within larger mechanical or electrical frameworks, paving the way for future advancements in automation</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Introduction to Robotics and Embedded Systems</li>
                        <li>Basics of Electronics and Circuit Design</li>
                        <li>Introduction to Microcontrollers</li>
                        <li>Programming for Embedded Systems</li>
                        <li>Sensors and Data Acquisition</li>
                        <li>Actuators and Motion Control</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartA