import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartB (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This course focuses on Data Analytics project management principles, preparing participants to manage and oversee the successful delivery of data-driven projects. Students learn to navigate project life cycles, budgets, timelines, and resources, ensuring efficient planning, execution, and deployment of data-driven products and services in diverse organizational settings</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Introduction to SQL for Data Analysis</li>
                        <li>Intermediate SQL for Data Analysis</li>
                        <li>Advanced SQL for Data Analysis</li>
                        <li>SQL Capstone Project</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartB