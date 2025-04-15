import Nav from '../component/nav'
import Footer from '../component/footer'
import Template from '../component/learning_template'
import Agric from '../assets/in_agrictech.png'
import AI from '../assets/in_ai.png'
import NANO from '../assets/in_nanotech.png'
import Bio from '../assets/in_biotech.png'
import ARVR from '../assets/in_arvr.png'
import Game from '../assets/in_game.png'
import Health from '../assets/in_game.png'
import Robot from '../assets/in_robotics.png'
import Arrow from '../assets/whitearrow.jpg'
 
function Incubation() {
    
  return (
    <>
        <Nav />
        <div className="container-fluid general-banner">  
          <h1 className='edited_margin2 text-white px-5'>Incubation area</h1>  
          <p  className='text-white px-5'>
            home  <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/>      
            what we do <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/>     
            Incubation
          </p>
        </div>

        <div className="container p-3 text-center">
          <p>ATIRC’s Incubation Program empowers startups to transform innovative ideas into thriving businesses. We provide mentorship, resources, funding access, and industry partnerships to help entrepreneurs grow. With a focus on emerging technologies like AI, Blockchain, and CleanTech, our program accelerates business development and fosters sustainable, impactful solutions for the future .</p>
        </div>

        <div className="container p-2">
          <div className="row ">
          <Template img={Agric} course="AgricTech" note="The Agritech incubation program focuses on utilizing technology to address challenges in agriculture. Entrepreneurs explore solutions for precision farming, smart irrigation, and sustainable practices. The program encourages innovation in areas such as crop monitoring, farm automation, and data-driven decision-making to increase productivity and sustainability in the agricultural sector" page={'/Form_incubation'} />
          
          <Template img={AI} course="Artificial Intelligence" note="ATIRC’s AI/ML incubation fosters cutting-edge innovations, helping startups develop AI-based solutions. Entrepreneurs receive mentorship in creating smart applications, algorithms, and neural networks that can transform industries such as healthcare, finance, and transportation. The program supports businesses aiming to create AI-powered products and services with real-world impact" page={'/Form_incubation'} />

          <Template img={NANO} course="NanoTech" note="The Nanotechnology and Chips Technology program focuses on developing advanced materials and devices at the nanoscale. Startups work on creating innovative applications for nanomaterials in electronics, healthcare, and other sectors. The incubation program provides resources and guidance for entrepreneurs interested in leveraging nanoscale technology for groundbreaking solutions" page={'/Form_incubation'} />

          <Template img={Bio} course="BioTechnology" note="Biotechnology incubation at ATIRC nurtures startups focused on biological systems and organisms to develop life-changing products. Entrepreneurs explore innovations in healthcare, agriculture, and environmental sustainability. The program supports research and development in bioengineering, genetic modification, and sustainable solutions that can solve pressing global challenges in health and food security." page={'/Form_incubation'} />
          <Template img={ARVR} course="Education Technology" note="EdTech incubation supports startups using technology to revolutionize education. The program empowers entrepreneurs to develop digital learning platforms, interactive tools, and educational resources that enhance learning experiences. ATIRC helps EdTech startups build scalable solutions for improving access to quality education across diverse communities and markets" page={'/Form_incubation'} />

          <Template img={Game} course="GAME DEVELOPMENT" note="Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel semper nisl Lorem ipsum dolor sit amet consectetur." page={'/Form_incubation'} />
          <Template img={Health} course="healthtech" note="The Nanotechnology and Chips Technology program focuses on developing advanced materials and devices at the nanoscale. Startups work on creating innovative applications for nanomaterials in electronics, healthcare, and other sectors. The incubation program provides resources and guidance for entrepreneurs interested in leveraging nanoscale technology for groundbreaking solutions." page={'/Form_incubation'} />
          <Template img={Robot} course="robotics" note="Startups focused on robotics and embedded systems receive guidance to create next-gen automated solutions. The program fosters the design and development of robotic devices and specialized computing systems for sectors such as healthcare, manufacturing, and logistics. ATIRC provides resources to innovate and create scalable robotic technologies for diverse industries." page={'/Form_incubation'} />
          </div>
        </div>

        <Footer />
    </>
  )
}

export default Incubation
