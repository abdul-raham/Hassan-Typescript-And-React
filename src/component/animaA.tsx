import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartA (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This course provides a foundational understanding of animation and game development principles, seamlessly blending theoretical knowledge with practical application.  Participants will develop the technical skills to design, build, and deploy engaging interactive experiences that meet industry standards</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Introduction to Animation and Game Development</li>
                        <li>Principles of Animation</li>
                        <li>Game Design Basics</li>
                        <li>Tools and Technologies</li>
                        <li>2D Animation and Game Design</li>
                        <li>2D Game Development</li>   
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartA