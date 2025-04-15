import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'
function PartA(){
    return(
        <>
             <div className="container p-3">
          <div className="row">
            <div className="col">
                <h2>course overview</h2>
                <p>Our Product Design curriculum focuses on developing the skills and mindset needed to create exceptional digital experiences. Guided by expert instructors, you'll master design thinking, visual design, and prototyping, while collaborating with peers on engaging projects. This immersive program prepares you for a successful career in the dynamic world of product design</p>
                <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
            </div>
            <div className="col">
              <div className="row">
                <div className="col"> <h2> 100,000</h2></div>
                <div className="col"><del> 200,000</del></div>
              </div>
              <p><b>Curriculum</b></p>
              <ul className='list'>
                    <li>Overview of UI/UX Design</li>
                    <li>Foundations of UX Design</li>
                    <li>User Research</li>
                    <li>Introduction to Design Software</li>
                    <li>Design System</li>
                    <li>User Journey Mapping</li>    
                </ul>
                <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
            </div>
          </div>
        </div>
        </>
    )
}
export default PartA