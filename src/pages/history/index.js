import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import CityCard from "../../components/CityCard";
import SectionTitle from "../../components/SectionTitle";
import { DashboardContext } from "../../contexts/DashboardContext";

const HistoryPage = memo(({ numberOfItems = 10 }) => {
  const { citiesSearched } = useContext(DashboardContext);

  return (
    <div className="py-5">
      <Row>
        <Col xs="10">
          <SectionTitle>History of search</SectionTitle>
        </Col>
        {numberOfItems === 10 && (
          <Col xs="2">
            <Link to="/search">
              <Button className="w-100" color="primary">
                New search <i className="bi bi-search ml-5"></i>
              </Button>
            </Link>
          </Col>
        )}
      </Row>
      <Row>
        {citiesSearched.length ? (
          <>
            {citiesSearched.map((eachCity) => (
              <Col xs="3" key={eachCity.id}>
                <CityCard
                  id={eachCity.id}
                  date={eachCity.date}
                  name={eachCity.name}
                  temperature={eachCity.main.temp}
                  icon={eachCity.weather[0].icon}
                  weatherDescription={eachCity.weather[0].description}
                />
              </Col>
            ))}
          </>
        ) : (
          <em>You haven't searched any cities yet.</em>
        )}
      </Row>
    </div>
  );
});

export default HistoryPage;
