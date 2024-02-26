import Button from "./Button";

const SquareBtn = ({ children, disabled }) => {
  return disabled ? (
    <Button height="compact" color="outlined" shape="square" disabled>
      {children}
    </Button>
  ) : (
    <Button height="compact" color="outlined" shape="square">
      {children}
    </Button>
  );
};

export default SquareBtn;
