import { useEffect, useState } from "react";
import exampleImg from "../../../asset/img/headerIcon/rolling-icon.png";
import exampleImg2 from "../../../asset/img/optionIcon/base_profile_icon.png";
import exampleImg3 from "../../../asset/img/optionIcon/sample_Image_01.jpg";
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
  const itemNum = 4; //넘어온 임시 list 개수
  const mockList = [
    {
      order: 1,
      backgroundImage: exampleImg,
    },
    {
      order: 2,
      backgroundImage: exampleImg2,
    },
    {
      order: 3,
      backgroundImage: exampleImg3,
    },
  ];

  useEffect(() => {
    const imageTextElement = document.getElementById("imageText");
    if (imageTextElement) {
      setTextLength(imageTextElement.innerHTML.length);
    }
  }, [textLength]);
  return (
    <>
      <div
        className={imageContainerStyle}
        style={
          direction === "left"
            ? { paddingLeft: `48px` }
            : { justifyContent: `right` }
        }
      >
        {direction === "left"
          ? mockList.map((item) => (
              <div
                key={item.order}
                className={imageStyle}
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                  [direction]: `${16 * (item.order - 1)}px`,
                  zIndex: -1,
                }}
              ></div>
            ))
          : mockList.reverse().map((item) => (
              <div
                key={item.order}
                className={imageStyle}
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                  [direction]: `${
                    16 *
                      (itemNum > 3
                        ? mockList.length + 1 - item.order
                        : mockList.length - item.order) +
                    plusNum
                  }px`,
                  zIndex: `${-4 + item.order}`,
                }}
              ></div>
            ))}
        {itemNum > 3 && (
          <div id="imageText" className={imageTextStyle}>
            +{itemNum}
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileImages;
