import Button from "./Button";

const CircleBtn = ({ children, type, disabled }) => {
  const height = type === "arrow" ? "standard" : "tall";
  const color = type === "arrow" ? "bright" : "dark";

  return disabled ? (
    <Button height={height} color={color} shape="circle" disabled>
      {children}
    </Button>
  ) : (
    <Button height={height} color={color} shape="circle">
      {children}
    </Button>
  );
};

export default CircleBtn;
