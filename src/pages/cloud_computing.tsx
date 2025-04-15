import Nav from '../component/nav'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import Head from '../component/sub_learning/sub_learning_head'
import Img from '../assets/cloud_comp.png'
import Footer from '../component/footer'
import PartA from '../component/cloudA'
import PartB from '../component/cloudB'
import PartC from '../component/cloudC'
 
function Cloud() {
    
  return (
    <>
        <Nav />
        <Head course="CLOUD COMPUTING / DevOps" note="Our Cloud Computing and DevOps training focuses on streamlining software development and operations. Participants learn key concepts like Continuous Integration (CI), Continuous Deployment (CD), and cloud infrastructure management. The course is designed to equip professionals with the skills to deploy scalable applications and ensure seamless integration and automation." img={Img} />
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

export default Cloud
