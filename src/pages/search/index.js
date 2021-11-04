import { useState } from "react";
import { Button, Col, Input, Row } from "reactstrap";
import { ROUTE_HISTORY } from "../../utils/routes";
import HistoryPage from "../history";
import "./index.css";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

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
            <Button className="w-100" color="primary">
              <i className="bi bi-search"></i>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <HistoryPage numberOfItems={4} />
            <Button color="primary" href={ROUTE_HISTORY}>
              See Full History <i class="bi bi-clock-history" />
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchPage;
