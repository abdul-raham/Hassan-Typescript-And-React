import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartA (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>A thorough software development curriculum encompasses the fundamental, intermediate, and advanced skills required to design, create, test, and implement software applications that adhere to industry best practices. It is designed to provide a structured learning path, progressing from foundational concepts to advanced techniques and methodologies.</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                    <li>Introduction to Software Development</li>
                    <li>Programming Basics</li>
                    <li>Control Structures</li>
                    <li>Functions and Modular Programming</li>
                    <li>Data Structures Basics</li>
                    <li>Algorithms</li> 
                        </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartA