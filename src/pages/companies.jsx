import { useState, useEffect } from 'react';
import '../styles/Companies.css';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/companies/');
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) return <div className="loading">Loading companies...</div>;

  return (
    <div className="companies-page">
      <div className="container">
        <h1>Our Partner Companies</h1>
        <div className="companies-grid">
          {companies.map(company => (
            <div key={company.id} className="company-card">
              <h3>{company.name}</h3>
              <p className="location">{company.location}</p>
              <p className="description">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;