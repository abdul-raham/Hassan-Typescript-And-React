import Nav from '../component/nav'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import Head from '../component/sub_learning/sub_learning_head'
import Img from '../assets/robotics.png'
import Footer from '../component/footer'
import PartA from '../component/robA';
import PartB from '../component/robB';
import PartC from '../component/robC';
 
function Robot() { 
    
  return (
    <>
        <Nav />
        <Head course="Robotics / Embedded Systems" note="Our Robotics and Embedded Systems training provides comprehensive knowledge about robotic systems and specialized computing devices. Participants will explore the design, construction, and operation of robots used in various industries. Additionally, they will learn about embedded systems that perform dedicated tasks within larger mechanical or electrical systems, playing a crucial role in shaping the future of automation." img={Img} />
        <First__long/>
        <PartA/>
        <Second_long/>
        <PartB/>
        <Third_long/>
        <PartC/>
        <Footer />      
    </>
  )
}

export default Robot
