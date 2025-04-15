import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartA (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>Cloud computing serves as a transformative backbone for modern IT. This curriculum equips students with the critical skills to harness cloud services effectively, optimize infrastructure, and apply cloud solutions across diverse industries</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Fundamentals of Cloud Computing</li>
                        <li>Cloud Computing Architectures</li>
                        <li>Cloud Providers Overview</li>
                        <li>Cloud Security Basics</li>
                        <li>Virtualization and Networking in Cloud</li>
                        <li>Cloud Networking Basics</li> 
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartA