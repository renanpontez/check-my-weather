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
import { Navigate } from "react-router";
import { ROUTE_HOME } from "../../utils/routes";
import { DashboardContext } from "../../contexts/DashboardContext";
import Button from "../../components/Button";

const LoginPage = () => {
  const { setUserLogged } = useContext(DashboardContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Fake API connection
    setTimeout(() => {
      setUserLogged({ email, password });
      setLoginSuccess(true);
    }, 1500);
  };

  const validateForm = useCallback(() => {
    return email.length && password.length;
  }, [email, password]);

  if (loginSuccess) {
    return <Navigate to={ROUTE_HOME} replace />;
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
                  type="button"
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
