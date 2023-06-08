/* eslint-disable react/prop-types */
import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const visitedCompanySlug = searchParams.get("visitedCompanySlug");
  console.log("visitedCompanySlug", visitedCompanySlug);

  const foundTechnology = props.technologies.find(
    (technology) => technology.slug === slug
  );
  return (
    <div>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Technology Details</p>

      <div className="technology-summary">
        <div className="technology-logo-wrapper">
          <img className="logo" src={foundTechnology.image} alt="" />
        </div>
        <div>
          <p>
            <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
              {foundTechnology.name}
            </h1>
            <b>About</b>
          </p>
          <p>{foundTechnology.description}</p>
          <br />
        </div>
      </div>

      <Link to={`/company/${visitedCompanySlug}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
