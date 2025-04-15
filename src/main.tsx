import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import '../src/css/App.css'

 
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
//import './component/nav.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import Error from './pages/404Error'
import AI from './pages/AI'
import Animation from './pages/animation'
import Carear from './pages/carear'
import Cloud from './pages/cloud_computing'
import Consulting from './pages/consulting'
import Contact from './pages/contact_us'
import Cyber from './pages/cybersecurity'
import Data from './pages/data_analysis'
import ConsultingForm from './pages/form_consulting'
import Form_incubation from './pages/form_incubation'
import Intend from './pages/form_intend'
import Job from './pages/form_job'
import ResearchForm from './pages/form_research'
import Incubation from './pages/incubation'
import LandingPage from './pages/landingPage'
import Learning from './pages/learning'
import Networking from './pages/networking'
import News from './pages/news'
import Project from './pages/project_manager'
import Info from './pages/research_info'
import Research from './pages/research'
import Robot from './pages/robotics'
import Software from './pages/software_dev'
import UI from './pages/ui_ux'
import Who from './pages/who_we_are'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: < Error />
  },
  {
    path: '/AI',
    element: <AI />
  },
  {
    path: '/Animation',
    element:<Animation />
  },
  {
    path: '/Carear',
    element:<Carear />
  },
  {
    path: '/Cloud',
    element:<Cloud />
  },
  { 
    path: '/Consulting',
    element:<Consulting />
  },
  {
    path: '/Contact',
    element:<Contact />
  },
  {
    path: '/Cyber',
    element:<Cyber />
  },
  {
    path: '/Data',
    element:<Data />
  },
  {
    path: '/ConsultingForm',
    element:<ConsultingForm />
  },
  {
    path: '/Form_incubation',
    element:<Form_incubation />
  },
  {
    path: '/Intend',
    element:<Intend />
  },
  {
    path: '/Job',
    element:<Job />
  },
  {
    path: '/ResearchForm',
    element:<ResearchForm />
  },
  {
    path: '/Incubation',
    element:<Incubation />
  },
  {
    path: '/Learning',
    element:<Learning />
  },
  {
    path: '/Networking',
    element:<Networking />
  },
  {
    path: '/News',
    element:<News />
  },
  {
    path: '/Project',
    element:<Project />
  },
  {
    path: '/Research',
    element:<Research />
  },
  {
    path: '/Info',
    element:<Info />
  },
  {
    path: '/Robot',
    element:<Robot />
  },
  {
    path: '/Software',
    element:<Software />
  },
  {
    path: '/UI',
    element:<UI />
  },
  {
    path: '/Who',
    element:<Who />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> 

  </StrictMode>,
)
