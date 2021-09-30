import { Col } from 'react-bootstrap';
import './sidebar.css';

export const Sidebar = () => {
  return (
    <Col className="sidebar" md={2}>
      <h2>Sidebar Content will go here</h2>
      <p>
        Perhaps some descriptive text clarifying the question, 
        or a progress meter of some sort, like a list of upcoming
        questions, highlighting the one we are on.
      </p>
    </Col>
  );
}

export default Sidebar;