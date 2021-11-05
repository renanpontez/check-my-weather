import "./index.css";
import {
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_SEARCH } from "../../utils/routes";
import { DashboardContext } from "../../contexts/DashboardContext";
import Button from "../../components/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const { userLogged, setUserLogged } = useContext(DashboardContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    // Fake API connection
    setUserLogged({ email, password });
  };

  const validateForm = useCallback(() => {
    return email.length && password.length;
  }, [email, password]);

  if (userLogged) {
    navigate(ROUTE_SEARCH);
  }

  return (
    <div className="">
      <Row>
        <Col xs="5" sm={{ offset: 3 }}>
          <Card className="p-3">
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button
                  color="primary"
                  disabled={!validateForm()}
                  className="w-100"
                  isLoading={isLoading}
                >
                  Log In
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
