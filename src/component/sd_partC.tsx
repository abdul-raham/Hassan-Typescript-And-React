import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartC (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This advanced course provides the strategic and tactical skills needed to lead complex software projects. You'll master advanced project lifecycles, resource allocation, and budgeting techniques. Learn industry-specific standards, best practices tailored for software development, and leadership principles for navigating today's dynamic software development landscape</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#500,000</h2></div>
                        <div className="col"><del>#600,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Version Control with Git</li>
                        <li>Testing and Debugging</li>
                        <li>Software Design Principles</li>
                        <li>Practical Project: Full-Stack Application</li>
                        <li>Advanced JavaScript and Frameworks</li>
                        <li>Advanced Back-End Development</li>
                        <li>Software Deployment and DevOps Basics</li>
                        <li>APIs and Third-Party Integration</li>
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