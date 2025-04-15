import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartC (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This advanced course provides you with the leadership and technical skills to excel in today's dynamic cybersecurity landscape. Master advanced security architectures, threat mitigation strategies, and resource optimization techniques. Gain valuable hands-on experience through a capstone project and explore potential funding avenues to advance your career in the cyber security industry</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#500,000</h2></div>
                        <div className="col"><del>#600,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Ethical Hacking Basics</li>
                        <li>Malware Analysis</li>
                        <li>Incident Response and Forensics</li>
                        <li>Wireless and Mobile Security</li>
                        <li>Cloud and IoT Security</li>
                        <li>Internet of Things</li>
                        <li>Zero Trust Architecture</li>
                        <li>Practical Project: Securing a Cloud or IoT Environment</li>
                        <li>Capstone Project, Internship and Career Preparation</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartC