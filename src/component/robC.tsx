import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartC (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This advanced course develops leadership and technical expertise for professionals in the dynamic field of robotics and embedded systems. Participants will master advanced robotic architectures, embedded system integration, and performance optimization techniques.  A capstone project provides practical application of learned skills, while exploration of funding opportunities empowers participants to drive innovation and advance their careers in automation and intelligent systems.</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#500,000</h2></div>
                        <div className="col"><del>#600,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Control Systems for Robotics</li>
                        <li>Mobile Robotics</li>
                        <li>Sensors in Robotics</li>
                        <li>Advanced Topics and Projects</li>
                        <li>Wireless Robotics</li>
                        <li>Embedded AI for Robotics</li>
                        <li>Industrial and Autonomous Robotics</li>
                        <li>Capstone Project and Career Preparation</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartC