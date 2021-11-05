import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { ROUTE_SEARCH } from "../../utils/routes";
import "./index.css";

const HomePage = () => {
  return (
    <div className="App">
      <Link to={ROUTE_SEARCH}>
        <Button className="w-100" color="primary">
          Check the Weather <i className="bi bi-search ml-5"></i>
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
