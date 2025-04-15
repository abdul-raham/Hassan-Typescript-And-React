import Nav from '../component/nav'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import Head from '../component/sub_learning/sub_learning_head'
import Img from '../assets/project_mana.png'
import Footer from '../component/footer'
import PartA from '../component/projA'
import PartB from '../component/projB'
import PartC from '../component/projC'

 
function Project() {
    
  return (
    <>
        <Nav />
        <Head course="Product Management" note="Our product management program gives you the practical skills and strategic mindset to thrive in today's ever-changing tech world." img={Img} />
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

export default Project
