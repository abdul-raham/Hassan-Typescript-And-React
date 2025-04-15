import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartB(){
    return(
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This course develops the leadership and project management skills necessary to successfully lead and deliver UI/UX and Graphic Design projects. Students learn to navigate project lifecycles, manage budgets and timelines, and optimize resource allocation, ensuring the efficient planning, execution, and deployment of visually compelling and user-centric digital products that meet client needs and exceed expectations</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                            <li>Designing for User Experience</li>
                            <li>Designing for User Interface</li>
                            <li>Website Designing From Scratch</li>
                            <li>Information Architecture</li>
                            <li>Wireframing Basics</li>
                            <li>Advanced Wireframing</li>
                            <li>Prototyping Basics</li>
                            <li>Visual Design Foundations</li> 
                        </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartB