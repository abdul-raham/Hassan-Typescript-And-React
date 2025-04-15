import Nav from '../component/nav'
import Template from '../component/learning_template'
import Design from '../assets/design_le.png'    
import software from '../assets/software_le.png'    
import Ai from '../assets/ai_le.png'    
import DevOp from '../assets/devops_le.png'    
import Iot from '../assets/iot_le.png'    
import Project from '../assets/project_le.png'    
import Data from '../assets/data_le.png'    
import Networking from '../assets/net_le.png'    
import Cloud from '../assets/cloud_le.png'    
import Cyber from '../assets/cyber_le.png'    
import Arrow from '../assets/whitearrow.jpg'

import Footer from '../component/footer'

function Learning() {
    
  return (
    <>
        <Nav />
        <div className="container-fluid general-banner">  
          <h1 className='edited_margin2 text-white px-5'><b>learning courses</b></h1> {/* add margin top */}
          <p className='text-white px-5'>
            home <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/>   
            what we do <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/> 
            learning
          </p>
        </div>

        <div className="container p-3 text-center">
          <p>ATIRC’s IT training programs offer hands-on learning across diverse technology domains, including Cloud Computing, AI, Cybersecurity, Data Science, and more. Our curriculum is designed to equip students and professionals with practical skills, preparing them to excel in today’s fast-evolving tech industry and tackle real-world challenges confidently.</p>
        </div>

        <div className="container p-2">
          <div className="row ">

            <Template img={Cloud} course="Cloud Computing" note="Our Cloud Computing and DevOps training focuses on streamlining software development and operations. Participants learn key concepts like Continuous Integration (CI), Continuous Deployment (CD), and cloud infrastructure management. The course is designed to equip professionals with the skills to deploy scalable applications and ensure seamless integration and automation" page={'/Cloud'} />

            <Template img={Cyber} course="Cyber Security" note="Our Cybersecurity training program focuses on protecting systems, networks, and data from threats. Learners gain expertise in security best practices, risk management, ethical hacking, encryption techniques, and more. The course prepares individuals to safeguard digital assets and respond effectively to security breaches in today’s interconnected world" page={'/Cyber'} />

            <Template img={software} course="Software Development(Full Stack Development)" note="In this course, participants gain a deep understanding of software development methodologies like Agile and Waterfall. The training covers the entire software development lifecycle (SDLC), from design and coding to testing and deployment. Learners also build proficiency in Full Stack Development, handling both backend and frontend programming tasks" page={'/Software'} />

            <Template img={Project} course="Project Management" note="This course focuses on IT project management principles, preparing participants to manage and oversee the successful delivery of technology projects. Students learn to navigate project life cycles, budgets, timelines, and resources, ensuring efficient planning, execution, and deployment of IT products and services in diverse organizational settings." page={'/Project'} />

            <Template img={Networking} course="Computer Networking" note="This program provides foundational to advanced knowledge of networking principles and Internet of Things (IoT) technologies. Students learn about network configurations, protocols, and IoT integration, preparing them to design and maintain efficient, secure, and scalable networks and leverage the power of connected devices for various applications" page={'/Networking'} />

            <Template img={Design} course='Design(ui/ux)/Animation/Graphic Design' note="This program focuses on the principles of user interface (UI) and user experience (UX) design, along with graphic design. Students learn to create intuitive, aesthetically pleasing interfaces while optimizing user interactions. The course also covers visual design techniques, empowering learners to design impactful and functional digital experiences for web and mobile platforms" page={'/UI'} />

            <Template img={DevOp} course='DeveOP/C1 & CD' note="Our Cloud Computing and DevOps training focuses on streamlining software development and operations. Participants learn key concepts like Continuous Integration (CI), Continuous Deployment (CD), and cloud infrastructure management. The course is designed to equip professionals with the skills to deploy scalable applications and ensure seamless integration and automation" page={'/'} />

            <Template img={Ai} course='Artificial intelligence/Machine Learning/Data Science' note="This program introduces participants to the world of AI and ML. Learners explore fundamental algorithms, data processing techniques, and model building, applying AI/ML to real-world challenges. With a focus on practical applications in industries such as healthcare, finance, and transportation, this training is ideal for aspiring AI professionals." page={'/AI'} />

            <Template img={Data} course='Data Analytics/Big Data' note="ATIRC’s data-focused training covers techniques for extracting valuable insights from large datasets. Students learn how to apply data analytics, data science, and mining methods to drive business decisions. The course also emphasizes Big Data tools and platforms, enabling participants to work with complex data sets and uncover patterns." page={'/Data'} />
            <Template img={Iot} course='IOT/Robotics' note="Our Robotics and Embedded Systems training offers in-depth knowledge of robotic systems and specialized computing devices. Participants explore the design, construction, and operation of robots for various industries, while also learning about embedded systems that perform dedicated tasks in larger mechanical or electrical systems, shaping the future of automation." page={'/Robot'} />

          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Learning
