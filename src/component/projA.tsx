import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartA (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This course focuses on IT project management principles, preparing participants to manage and oversee the successful delivery of technology projects. Students learn to navigate project life cycles, budgets, timelines, and resources, ensuring efficient planning, execution, and deployment of IT products and services in diverse organizational settings.</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Introduction to Project Management</li> 
                        <li>Project Life Cycle and Phases</li> 
                        <li>Key Concepts and Terminologies</li> 
                        <li>Basic Tools and Techniques</li> 
                        <li>Introduction to Project Management Methodologies</li> 
                        <li>Communication in Projects</li> 
                        <li>Simple Case Study</li> 
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartA