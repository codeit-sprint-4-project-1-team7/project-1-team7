import Button from "./Button";

const PrimaryBtn = ({ children, width, height, disabled }) => {
  return disabled ? (
    <Button width={width} height={height} color="primary" disabled>
      {children}
    </Button>
  ) : (
    <Button width={width} height={height} color="primary">
      {children}
    </Button>
  );
};

export default PrimaryBtn;
