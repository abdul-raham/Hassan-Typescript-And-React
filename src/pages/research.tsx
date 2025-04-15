import Nav from '../component/nav'
import Footer from '../component/footer'
import Agric from '../assets/re_agrictech.png'
import Template from '../component/learning_template'
import AI from '../assets/re_ai.png'
import Nano from '../assets/re_nano.png'
import Bio from '../assets/re_bio.png'
import Edu from '../assets/re-EDU.png'
import Clean from '../assets/re_clean.png'
import Arve from '../assets/re-ARVR.png'
import Quantum from '../assets/re_quatum.png'
import Netw from '../assets/re-6g.png'
import Robot from '../assets/re_robot.png'
import Arrow from '../assets/whitearrow.jpg'

 
function Research() {
    
  return (
    <>
        <Nav />
        <div className="container-fluid general-banner"> {/* add background image */}
            <h1 className='edited_margin2 text-white px-5'>research area</h1> {/* add margin top */}
            <p className='text-white px-5'>
              home <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/>
              what we do <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/>
              research
            </p>
        </div>

        <div className="container p-3 text-center">
          <p> ATIRC’s Research Program fosters groundbreaking innovations across diverse fields like AI, Biotech, Clean Tech, and Quantum Computing. By encouraging collaboration between researchers, students, and industry experts, we aim to tackle real-world challenges, advance knowledge, and drive technological progress that will shape Africa’s future and contribute globally to scientific advancements.</p>
        </div>
          
        <div className="container p-2">
          <div className="row ">
            <Template img={Agric} course="AgricTech" note="Research in Agritech at ATIRC focuses on smart farming, precision agriculture, and sustainable agricultural practices. Projects aim to enhance food security, increase crop yield, and optimize farming techniques through technology. ATIRC’s research initiatives support innovation in agri-tech solutions to tackle global challenges related to climate change and agricultural efficiency." page={'/ResearchForm'} />

            <Template img={AI} course="AI/ML research at ATIRC focuses on advancing algorithms and models that can be applied across various industries. Researchers work on developing intelligent systems, predictive analytics, and automation tools, transforming sectors like healthcare, finance, and transportation. ATIRC’s AI/ML research seeks to make data-driven insights more accessible and actionable for businesses." page={'/ResearchForm'} />

            <Template img={Nano} course="NanoTech" note="Nanotechnology research at ATIRC explores the application of nanomaterials in electronics, healthcare, and environmental sustainability. Projects investigate how manipulating matter at the nanoscale can lead to new innovations, from more efficient electronics to medical breakthroughs. ATIRC is dedicated to pioneering new technologies with vast potential for improving everyday life." page={'/ResearchForm'} />

            <Template img={Bio} course="BioTechnology" note="Biotechnology research at ATIRC focuses on developing new biological and biotechnological solutions for health, agriculture, and the environment. Researchers explore genetic engineering, biomaterials, and sustainable practices to improve global food security, healthcare, and environmental conservation. The program supports breakthrough innovations that address pressing global challenges." page={'/ResearchForm'} />

            <Template img={Edu} course="Education Technology" note="EdTech research at ATIRC investigates how digital technologies can enhance educational outcomes. Projects focus on improving teaching methods, creating personalized learning experiences, and increasing access to education through online platforms. ATIRC supports research to revolutionize education, fostering solutions that bridge gaps and ensure equitable learning opportunities for all." page={'/ResearchForm'} />

            <Template img={Clean} course="CleanTech" note="CleanTech research at ATIRC focuses on innovations that reduce environmental impact and promote sustainability. Projects address climate change, energy efficiency, waste reduction, and renewable energy solutions. ATIRC aims to support the development of technologies that create sustainable, eco-friendly solutions and contribute to building a greener, more sustainable world.." page={'/ResearchForm'} />

            <Template img={Arve} course="AR/VR" note="AR/VR research at ATIRC explores immersive technology applications for education, training, therapy, and entertainment. The research delves into how virtual and augmented environments can be used to create engaging and transformative experiences. ATIRC’s AR/VR research focuses on developing innovative, real-world applications in multiple industries to enhance user experiences.." page={'/ResearchForm'} />
            <Template img={Quantum} course="Quantum Computing " note="ATIRC’s Quantum Computing research explores the potential of quantum mechanics to solve complex computational problems. Researchers investigate quantum algorithms, quantum encryption, and how quantum technology can revolutionize industries such as healthcare, cybersecurity, and finance. The research aims to push the boundaries of computation and unlock new scientific frontiers.." page={'/ResearchForm'} />
            <Template img={Netw} course="6G/Networking" note="Blockchain research at ATIRC investigates the applications of decentralized technology beyond cryptocurrency. Projects explore how blockchain can improve transparency, security, and efficiency across various industries, including supply chain, healthcare, and data management. The research aims to create transformative solutions that foster trust, accountability, and innovation in business operations.." page={'/ResearchForm'} />
            <Template img={Robot} course="Robotics" note="Robotics and IoT research at ATIRC focuses on advancing automation and connected devices. Projects explore innovative robotics solutions for industrial, healthcare, and service sectors. IoT research investigates how interconnected devices can streamline processes and enhance data collection, enabling smarter decision-making in various applications, from manufacturing to healthcare.." page={'/ResearchForm'} />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Research
