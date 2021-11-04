import { Button, Spinner } from "reactstrap";

const CustomButton = ({ isLoading, children, ...rest }) => {
  return (
    <>
      <Button {...rest}>
        {isLoading ? (
          <Spinner className={"position-relative visible"} size="sm" />
        ) : (
          <>{children}</>
        )}
      </Button>
    </>
  );
};

export default CustomButton;
