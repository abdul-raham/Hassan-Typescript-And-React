import Nav from '../component/nav';
import Footer from '../component/footer';

import Agric   from '../assets/re_agrictech.png';
import AI      from '../assets/re_ai.png';
import Nano    from '../assets/re_nano.png';
import Bio     from '../assets/re_bio.png';
import Edu     from '../assets/re-EDU.png';
import Clean   from '../assets/re_clean.png';
import Arve    from '../assets/re-ARVR.png';
import Quantum from '../assets/re_quatum.png';
import Netw    from '../assets/re-6g.png';
import Robot   from '../assets/re_robot.png';

import Arrow    from '../assets/whitearrow.jpg';
import Template from '../component/learning_template';

function Research() {
  return (
    <>
      <Nav />

      {/* Banner */}
      <div className="container-fluid general-banner">
        <h1 className="edited_margin2 text-white px-5">research area</h1>
        <p className="text-white px-5">
          home
          <img src={Arrow} alt="" className="m-2 img-fluid" width={20} />
          what we do
          <img src={Arrow} alt="" className="m-2 img-fluid" width={20} />
          research
        </p>
      </div>

      {/* Intro */}
      <div className="container p-3 text-center">
        <p>
          ATIRC’s Research Program fosters groundbreaking innovations across diverse fields
          like AI, Biotech, Clean Tech, and Quantum Computing. By encouraging collaboration
          between researchers, students, and industry experts, we aim to tackle real‑world
          challenges, advance knowledge, and drive technological progress that will shape
          Africa’s future and contribute globally to scientific advancements.
        </p>
      </div>

      {/* Research cards */}
      <div className="container p-2">
        <div className="row">

          <Template
            img={Agric}
            course="AgricTech"
            note="Research in Agritech at ATIRC focuses on smart farming, precision agriculture, and sustainable agricultural practices. Projects aim to enhance food security, increase crop yield, and optimize farming techniques through technology. ATIRC’s research initiatives support innovation in agri‑tech solutions to tackle global challenges related to climate change and agricultural efficiency."
            page="/ResearchForm"
          />

          <Template
            img={AI}
            course="AI / Machine Learning"
            note="AI/ML research at ATIRC advances algorithms and models that power intelligent systems, predictive analytics, and automation tools across healthcare, finance, transportation, and more. The goal is to make data‑driven insights accessible and actionable for businesses and society."
            page="/ResearchForm"
          />

          <Template
            img={Nano}
            course="NanoTech"
            note="Nanotechnology research at ATIRC explores the application of nanomaterials in electronics, healthcare, and environmental sustainability, pioneering innovations that can reshape everyday life."
            page="/ResearchForm"
          />

          <Template
            img={Bio}
            course="BioTechnology"
            note="Biotechnology research develops new biological solutions for health, agriculture, and the environment—spanning genetic engineering, biomaterials, and sustainable practices."
            page="/ResearchForm"
          />

          <Template
            img={Edu}
            course="Education Technology"
            note="EdTech research investigates how digital technologies can enhance teaching methods, personalize learning, and widen access to education through scalable online platforms."
            page="/ResearchForm"
          />

          <Template
            img={Clean}
            course="CleanTech"
            note="CleanTech research focuses on innovations that reduce environmental impact—addressing energy efficiency, waste reduction, and renewable‑energy solutions for a sustainable world."
            page="/ResearchForm"
          />

          <Template
            img={Arve}
            course="AR / VR"
            note="AR/VR research explores immersive technologies for education, training, therapy, and entertainment, creating transformative user experiences across industries."
            page="/ResearchForm"
          />

          <Template
            img={Quantum}
            course="Quantum Computing"
            note="Research investigates quantum algorithms, encryption, and hardware to unlock computation beyond classical limits, with applications in healthcare, cybersecurity, finance, and science."
            page="/ResearchForm"
          />

          <Template
            img={Netw}
            course="6G / Networking"
            note="Networking research at ATIRC covers next‑generation 6G architectures and decentralized technologies like blockchain to improve transparency, security, and efficiency across sectors."
            page="/ResearchForm"
          />

          <Template
            img={Robot}
            course="Robotics & IoT"
            note="Robotics and IoT research advances automation and connected devices for industrial, healthcare, and service applications—enabling smarter, data‑driven decision‑making."
            page="/ResearchForm"
          />

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Research;
