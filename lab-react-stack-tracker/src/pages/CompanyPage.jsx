/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();
  const foundCompany = props.companies.find(
    (company) => company.slug === companySlug
  );

  return (
    <div className="CompanyPage">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Company Profile</p>
      <div className="company-summary">
        <div className="company-logo-wrapper">
          <img className="logo" src={foundCompany.logo} alt="" />
        </div>
        <div>
          <p>
            <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
              {foundCompany.name}
            </h1>
            <b>About</b>
          </p>
          <p>{foundCompany.description}</p>
          <br />
        </div>
      </div>

      <br />

      <ul className="tech-stack-list">
        {foundCompany.techStack.map((tech) => (
          <Link
            key={tech.id}
            to={`/tech/${tech.slug}?visitedCompanySlug=${foundCompany.slug}`}
          >
            <li style={{ listStyle: "none" }} className="tech-stack-item">
              <img src={tech.image} alt="" className="icon" />
              <br />
            </li>
            <p>{tech.name}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
