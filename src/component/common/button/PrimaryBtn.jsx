import Button from "./Button";

const PrimaryBtn = ({ children, width, height, disabled }) => {
  console.log(typeof width);
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
