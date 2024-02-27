import { useEffect, useState } from "react";
import exampleImg from "../../../asset/img/headerIcon/rolling-icon.png";
function ProfileImages({
  imageContainerStyle,
  imageStyle,
  imageTextStyle,
  direction,
}) {
  const [textLength, setTextLength] = useState(0);
  let plusNum = 0;
  if (direction === "right") {
    plusNum = (textLength - 2) * 6;
  }

  useEffect(() => {
    const imageTextElement = document.getElementById("imageText");
    if (imageTextElement) {
      setTextLength(imageTextElement.innerHTML.length);
    }
  }, [textLength]);
  return (
    <div
      className={imageContainerStyle}
      style={direction === "left" ? { paddingLeft: `48px` } : null}
    >
      <div
        className={imageStyle}
        style={{
          backgroundImage: `url(${exampleImg})`,
          [direction]: direction === "right" ? `${48 + plusNum}px` : `0px`,
          zIndex: -3,
        }}
      ></div>
      <div
        className={imageStyle}
        style={{
          backgroundImage: `url(${exampleImg})`,
          [direction]: direction === "right" ? `${32 + plusNum}px` : `16px`,
          zIndex: -2,
        }}
      ></div>
      <div
        className={imageStyle}
        style={{
          backgroundImage: `url(${exampleImg})`,
          [direction]: direction === "right" ? `${16 + plusNum}px` : `32px`,
          zIndex: -1,
        }}
      ></div>
      <div id="imageText" className={imageTextStyle}>
        +66
      </div>
    </div>
  );
}

export default ProfileImages;
