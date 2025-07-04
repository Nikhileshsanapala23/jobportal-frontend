import { useState } from 'react';

const ApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume_link: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/apply/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          job_id: jobId
        }),
      });
      
      if (!response.ok) {
        throw new Error('Application failed');
      }
      
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit application. Please try again.');
      console.error('Application error:', err);
    }
  };

  if (submitted) {
    return (
      <div className="success-message">
        <h3>Application Submitted!</h3>
        <p>Thank you for applying. We'll review your application shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <h3>Apply for this Position</h3>
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="resume_link">Resume URL</label>
        <input
          type="url"
          id="resume_link"
          name="resume_link"
          value={formData.resume_link}
          onChange={handleChange}
          placeholder="https://example.com/myresume.pdf"
          required
        />
      </div>
      <button type="submit" className="btn submit-btn">Submit Application</button>
    </form>
  );
};

export default ApplicationForm;