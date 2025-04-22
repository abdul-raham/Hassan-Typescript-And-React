import { Link } from 'react-router-dom';
import WhiteArrow from '../assets/whitearrow.jpg';

export type LearningTemplateProps = {
  img: string;
  course: string;
  note: string;      // required
  page: string;
};

const LearningTemplate = ({ img, course, note, page }: LearningTemplateProps) => (
  <div className="col-md-6 col-sm-12 p-1 border rounded">
    <img src={img} alt={course} className="img-fluid rounded w-100" />
    <h2 className="p-3">{course}</h2>
    <p className="p-2">{note}</p>
    <Link to={page} className="text-danger p-2 text-decoration-none">
      <b>Apply here</b>
      <img src={WhiteArrow} alt="arrow" width="20" className="m-1" />
    </Link>
  </div>
);

export default LearningTemplate;
