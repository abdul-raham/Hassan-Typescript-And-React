import Nav from '../component/nav'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import Head from '../component/sub_learning/sub_learning_head'
import Img from '../assets/animation.png'
import Footer from '../component/footer'
import PartA from '../component/animaA'
import PartB from '../component/animaB'
import PartC from '../component/animaC'
 
function Animation() {
    
  return (
    <>
        <Nav />
        <Head course="Animation / Games Development" note="AR/VR research at ATIRC explores immersive technology applications for education, training, therapy, and entertainment. The research delves into how virtual and augmented environments can be used to create engaging and transformative experiences. ATIRC’s AR/VR research focuses on developing innovative, real-world applications in multiple industries to enhance user experiences." img={Img} />
        <First__long/>
        <PartA/>
        <Second_long/>
        <PartB />
        <Third_long/>
        <PartC/>
        <Footer/>    
    </>
  )
}

export default Animation
