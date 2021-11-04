import { Button, Col, Row } from "reactstrap";
import CityCard from "../../components/CityCard";
import SectionTitle from "../../components/SectionTitle";
import { ROUTE_SEARCH } from "../../utils/routes";

const HistoryPage = ({ numberOfItems = 10 }) => {
  return (
    <div className="py-5">
      <Row>
        <Col xs="10">
          <SectionTitle>History of search</SectionTitle>
        </Col>
        {numberOfItems === 10 && (
          <Col xs="2">
            <Button className="w-100" color="primary" href={ROUTE_SEARCH}>
              New search <i class="bi bi-search ml-5"></i>
            </Button>
          </Col>
        )}
      </Row>
      <Row>
        {[...Array(numberOfItems)].map(() => (
          <Col xs="3">
            <CityCard />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HistoryPage;
