import "./index.css";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { ROUTE_WEATHER_ICON } from "../../utils/routes";

const CityCard = ({ date, icon, name, temperature, weatherDescription }) => {
  return (
    <Card className="my-3 text-center each-city">
      <CardBody>
        <img src={ROUTE_WEATHER_ICON(icon)} />
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
