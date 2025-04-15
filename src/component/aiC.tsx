import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartC (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This advanced AI/ML Project Management course provides you with the strategic and tactical expertise to lead complex projects. Learn advanced project lifecycles, resource allocation, and budgeting techniques. Gain hands-on experience through a capstone project and explore potential funding opportunities with access to grant information</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#500,000</h2></div>
                        <div className="col"><del>#600,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Advanced Topics and NLP</li>
                        <li>Advanced NLP Techniques</li>
                        <li>Reinforcement Learning</li>
                        <li>Practical Deep Learning</li>
                        <li>AI/ML Deployment and Ethics</li>
                        <li>AI Model Deployment</li>
                        <li>AI Ethics and Bias</li>
                        <li> Capstone Project Planning</li> 
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartC