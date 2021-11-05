import { useContext, useState } from "react";
import { Col, Form, Input, Row } from "reactstrap";
import { DashboardContext } from "../../contexts/DashboardContext";
import { getWeatherByCityName } from "../../services/weather.api";
import { Link } from "react-router-dom";
import HistoryPage from "../history";
import Button from "../../components/Button";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";

const SearchPage = () => {
  // state
  const { addCitiesToContext } = useContext(DashboardContext);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // here the app creates a row of cities to find one by one
  const handleSearchWeather = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const allCitiesTyped = searchText.split(",");
    const citiesWeatherResponses = await Promise.all(
      allCitiesTyped.map(async (eachCityName) => {
        const weatherResponse = await getWeatherByCityName(eachCityName.trim());
        if (weatherResponse) {
          return { ...weatherResponse, date: new Date().toISOString() };
        } else {
          showErrorMessage({ cityName: eachCityName });
        }
      })
    );

    addCitiesToContext(citiesWeatherResponses);
    setSearchText("");
    setIsLoading(false);
  };

  const showErrorMessage = ({ cityName }) =>
    toast.error(
      `Oops! We couldn't find the city "${cityName}". Please check the input and try again.`
    );

  return (
    <div className="App">
      <div>
        <Form onSubmit={handleSearchWeather}>
          <Row>
            <Col xs="5" sm={{ offset: 2 }}>
              <Input
                autoFocus
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search cities..."
              />
            </Col>
            <Col xs="2">
              <Button
                className="w-100"
                color="primary"
                type="submit"
                isLoading={isLoading}
              >
                <i className="bi bi-search"></i>
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col xs="12">
            <HistoryPage numberOfItems={4} />
            <Link to="/history">
              <Button color="primary">
                See Full History <i className="bi bi-clock-history" />
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SearchPage;
