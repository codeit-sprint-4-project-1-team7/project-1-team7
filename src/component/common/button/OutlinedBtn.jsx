import Button from "./Button";

const OutlinedBtn = ({ children, height, disabled }) => {
  return disabled ? (
    <Button height={height} color="outlined" disabled>
      {children}
    </Button>
  ) : (
    <Button height={height} color="outlined">
      {children}
    </Button>
  );
};

export default OutlinedBtn;
