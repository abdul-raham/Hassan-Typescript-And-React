import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function Partc (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This advanced course focuses on developing the real-world skills needed to lead and deliver successful UI/UX and Graphic Design projects. You'll master advanced project lifecycles, resource allocation, and budgeting techniques, while learning industry-specific standards and leadership principles for navigating the challenges of real-world design environments</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#500,000</h2></div>
                        <div className="col"><del>#600,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                            <li>Design Systems and Style Guides</li>
                            <li>Iconography and Imagery</li>
                            <li>Accessibility in Design</li>
                            <li>Interaction Design and Usability Testing</li>
                            <li>Interaction Design</li>
                            <li>Advanced Prototyping</li>
                            <li>Usability Testing</li>
                            <li>Responsive Design</li>
                            <li>Introduction to Design Thinking</li>
                            <li>Problem-Solving Workshops</li>
                            <li>Design Sprint</li>
                            <li>Project Ideation</li>
                            <li>Portfolio Development</li>
                            <li>Capstone Project Development and Internship</li>
                        </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Partc