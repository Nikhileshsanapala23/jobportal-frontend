import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>
      <p className="salary">${job.salary.toLocaleString()}</p>
      <div className="job-actions">
        <Link to={`/jobs/${job.id}`} className="btn view-btn">View Details</Link>
      </div>
    </div>
  );
};

export default JobCard;