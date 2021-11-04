import { useContext, useState } from "react";
import { Col, Input, Row } from "reactstrap";
import { DashboardContext } from "../../contexts/DashboardContext";
import { getWeatherByCityName } from "../../services/weather.api";
import { ROUTE_HISTORY } from "../../utils/routes";
import HistoryPage from "../history";
import Button from "../../components/Button";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";

const SearchPage = () => {
  const { citiesSearched, setCitiesSearched } = useContext(DashboardContext);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchWeather = async () => {
    setIsLoading(true);

    const weatherResponse = await getWeatherByCityName(searchText);
    if (weatherResponse) {
      setCitiesSearched(
        citiesSearched.concat([
          { ...weatherResponse, date: new Date().toISOString() },
        ])
      );
    } else {
      showErrorMessage();
    }

    setIsLoading(false);
  };

  const showErrorMessage = () =>
    toast.error(
      "Oops, we couldn't find a city. Please check the input and try again."
    );

  return (
    <div className="App">
      <div>
        <Row>
          <Col xs="5" sm={{ offset: 2 }}>
            <Input
              autoFocus
              type="email"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search cities..."
            />
          </Col>
          <Col xs="2">
            <Button
              className="w-100"
              color="primary"
              onClick={handleSearchWeather}
              isLoading={isLoading}
            >
              <i className="bi bi-search"></i>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <HistoryPage numberOfItems={4} />
            <Button color="primary" href={ROUTE_HISTORY}>
              See Full History <i className="bi bi-clock-history" />
            </Button>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SearchPage;
