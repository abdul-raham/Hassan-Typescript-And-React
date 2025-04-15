import Nav from '../component/nav'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import Head from '../component/sub_learning/sub_learning_head'
import Img from '../assets/cybersecurity.png'
import Footer from '../component/footer'
import PartA from '../component/cyberA'
import PartB from '../component/cyberB'
import PartC from '../component/cyberC'
function Cyber() {
    
  return (
    <>
        <Nav />
        <Head course="CYBERSECURITY" note="Our Cybersecurity training program focuses on protecting systems, networks, and data from threats. Learners gain expertise in security best practices, risk management, ethical hacking, encryption techniques, and more. The course prepares individuals to safeguard digital assets and respond effectively to security breaches in today’s interconnected world." img={Img} />
        <First__long/>
        <PartA/>
        <Second_long/>
        <PartB/>
        <Third_long/>
        <PartC />
        <Footer/>
          
    </>
  )
}

export default Cyber
