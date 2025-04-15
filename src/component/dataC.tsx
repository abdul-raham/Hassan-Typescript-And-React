import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartC(){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This Advanced Data Analytics Project Management course prepares you to successfully deliver complex data-driven projects, covering advanced project lifecycles, resource allocation strategies, and advanced budgeting techniques for effective planning and execution. Learn strategic project management best practices tailored for data analytics, industry-specific standards, and leadership in complex data-driven environments.</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#500,000</h2></div>
                        <div className="col"><del>#600,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Introduction To Python Programming</li>
                        <li>Introduction to Power BI</li>
                        <li>Intermediate and Advanced Power BI</li>
                        <li>Python and Power BI Capstone Project</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartC