import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartB (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This intermediate-level course empowers cloud computing professionals with the leadership and project management skills needed to successfully lead and deliver complex cloud initiatives. Learn to navigate intricate cloud architectures, optimize resource allocation, and ensure the seamless, on-time, and cost-effective deployment of high-impact cloud solutions while adhering to industry best practices</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Storage and Database Services</li>
                        <li>Hands-on with Cloud Platforms</li>
                        <li>Cloud Computing Services</li>
                        <li>Platform as a Service</li>
                        <li>IoT Hardware Platforms</li>
                        <li>Software as a Service</li>
                        <li>Advanced Cloud Security</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartB