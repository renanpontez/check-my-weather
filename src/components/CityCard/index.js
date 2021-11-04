import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const CityCard = ({ image, name, temperature, weatherDescription }) => {
  return (
    <Card className="my-3">
      <CardImg
        top
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CityCard;
