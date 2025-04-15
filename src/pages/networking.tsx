import Nav from '../component/nav'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import Head from '../component/sub_learning/sub_learning_head'
import Img from '../assets/networking.png'
import Footer from '../component/footer'
import PartA from '../component/netA'
import PartB from '../component/netB'
import PartC from '../component/netC'

 
function Networking() {
    
  return (
    <>
        <Nav />
        <Head course="Networking /  IoT" note="This program provides a foundation for advanced knowledge of networking principles and Internet of Things (IoT) technologies. Students learn about network configurations, protocols, and IoT integration, preparing them to design and maintain efficient, secure, and scalable networks and leverage the power of connected devices for various applications." img={Img} />
        <First__long/>
        <PartA/>
        <Second_long/>
        <PartB/>
        <Third_long/>
        <PartC/>
        <Footer/>
          
    </>
  )
}

export default Networking
