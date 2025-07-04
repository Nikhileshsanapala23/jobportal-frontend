import { useState, useEffect } from 'react';
import '../styles/Applications.css';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch applications for the logged-in user
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/applications/');
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <div className="loading">Loading your applications...</div>;

  return (
    <div className="applications-page">
      <div className="container">
        <h1>My Applications</h1>
        {applications.length > 0 ? (
          <div className="applications-list">
            {applications.map(app => (
              <div key={app.id} className="application-card">
                <h3>{app.job_title}</h3>
                <p className="company">{app.company}</p>
                <p className="status">Status: {app.status || 'Submitted'}</p>
                <p className="date">Applied on: {new Date(app.applied_at).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-applications">
            <p>You haven't applied to any jobs yet.</p>
            <a href="/jobs" className="btn primary-btn">Browse Jobs</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;