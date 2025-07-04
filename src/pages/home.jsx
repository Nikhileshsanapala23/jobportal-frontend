import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>
          <p>Browse thousands of job listings from top companies worldwide</p>
          <Link to="/jobs" className="btn primary-btn">Browse Jobs</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Why Choose JobPortal?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Easy Application</h3>
              <p>Apply to jobs with just a few clicks</p>
            </div>
            <div className="feature-card">
              <h3>Top Companies</h3>
              <p>Connect with leading employers</p>
            </div>
            <div className="feature-card">
              <h3>Real-time Updates</h3>
              <p>Get notified about new opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;