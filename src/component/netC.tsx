import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartC(){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This advanced course empowers you with the leadership and technical skills to successfully lead and deliver complex IoT projects. Master advanced network architectures, IoT deployment strategies, and resource optimization techniques. Gain valuable hands-on experience through a capstone project and explore potential funding avenues with access to grant information</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#500,000</h2></div>
                        <div className="col"><del>#600,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>IoT Development and Security</li>
                        <li>IoT Platforms and Frameworks</li>
                        <li>IoT Security</li>
                        <li>Hands-on IoT Projects</li>
                        <li>IoT Applications and Advanced Topics</li>
                        <li>Industrial IoT</li>
                        <li>IoT Edge Computing</li>
                        <li>Capstone Project and Certification Preparation</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartC