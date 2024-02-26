import Button from "./Button";

const SecondaryBtn = ({ children, height, disabled }) => {
  return disabled ? (
    <Button height={height} color="secondary" disabled>
      {children}
    </Button>
  ) : (
    <Button height={height} color="secondary">
      {children}
    </Button>
  );
};

export default SecondaryBtn;
