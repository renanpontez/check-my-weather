import "./index.css";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { ROUTE_WEATHER_ICON } from "../../utils/routes";
import { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";

const CityCard = ({
  id,
  date,
  icon,
  name,
  temperature,
  weatherDescription,
}) => {
  const { removeCityFromContext } = useContext(DashboardContext);

  const handleRemoveCity = () => removeCityFromContext(id);

  return (
    <Card className="my-3 text-center each-city">
      <Button
        className="trash"
        type="button"
        size="sm"
        onClick={handleRemoveCity}
      >
        <i className="bi bi-trash2"></i>
      </Button>
      <CardBody>
        <img src={ROUTE_WEATHER_ICON(icon)} alt={weatherDescription} />
        <CardTitle tag="h1" className="py-2 text-uppercase">
          {parseInt(temperature)}ºC
        </CardTitle>
        <CardSubtitle className="mb-2" tag="h4">
          {name}
        </CardSubtitle>
        <CardText className="text-uppercase">{weatherDescription}</CardText>
        <CardText className="text-uppercase">
          {new Date(date).toLocaleDateString()}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CityCard;
