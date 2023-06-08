/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function HomePage(props) {
  return (
    <div className="HomePage">
      <br />
      <h1 style={{ fontSize: "24px" }}>
        StackTracker: Discover Tech Stacks Used by Top Companies
      </h1>
      <br />
      <ul className="companies-list">
        {props.companies.map((company) => (
          <Link key={company.id} to={`/company/${company.slug}`}>
            <li className="list-item">
              <p>{company.name}</p>
              <br />
              <br />
              <img src={company.logo} alt="" className="company-logo" />
              {/* <br />
              <div className="tech-stack-preview">
                {company.techStack.map((technology) => (
                  <div key={technology.slug} className="mini-icon-wrapper">
                    <img
                      key={technology.slug}
                      src={technology.image}
                      className="mini-icon"
                    />
                  </div>
                ))}
              </div> */}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
