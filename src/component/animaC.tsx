import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartC (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>This advanced Animation and Game Development course cultivates strategic and technical leadership skills for managing complex projects.  Participants will master advanced production workflows, resource optimization, and budgeting strategies.  A capstone project provides practical experience, while exploration of funding opportunities, including access to grant information, prepares participants for real-world project development.</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#500,000</h2></div>
                        <div className="col"><del>#600,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Advanced Animation and Game Development</li>
                        <li>Visual Effects (VFX)</li>
                        <li>Game AI and Mechanics</li>
                        <li>Cinematics for Games and Animations</li>
                        <li>Optimization and Performance</li>
                        <li>Multiplayer and Publishing</li>
                        <li>Testing and Debugging</li>
                        <li>Game Monetization and Publishing</li>
                        <li>Hands-On Project (3D)</li>
                        <li>Capstone Project Development</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartC