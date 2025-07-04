import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApplicationForm from './ApplicationForm';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/jobs/${id}/`);
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <div className="loading">Loading job details...</div>;
  if (!job) return <div className="error">Job not found</div>;

  return (
    <div className="job-detail">
      <div className="job-info">
        <h1>{job.title}</h1>
        <h2>{job.company}</h2>
        <p className="location">{job.location}</p>
        <p className="salary">${job.salary.toLocaleString()}</p>
        <div className="job-description">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </div>
      </div>
      <div className="application-section">
        <ApplicationForm jobId={job.id} />
      </div>
    </div>
  );
};

export default JobDetail;