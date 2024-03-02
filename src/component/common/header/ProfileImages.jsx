import { useEffect, useState } from "react";
function ProfileImages({
  imageContainerStyle,
  imageStyle,
  imageTextStyle,
  direction,
  messageCount,
  recentMessages,
}) {
  const [textLength, setTextLength] = useState(0);
  let plusNum = 0;
  if (direction === "right") {
    plusNum = (String(messageCount).length - 1) * 6;
  }

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
          ? recentMessages.map((item, i) => (
              <div
                key={item.id}
                className={imageStyle}
                style={{
                  backgroundImage: `url(${item.profileImageURL})`,
                  [direction]: `${16 * i}px`,
                }}
              ></div>
            ))
          : recentMessages.map((item, i) => (
              <div
                key={item.id}
                className={imageStyle}
                style={{
                  backgroundImage: `url(${item.profileImageURL})`,
                  [direction]: `${
                    16 *
                      (messageCount > 3
                        ? recentMessages.length - i
                        : recentMessages.length - i) +
                    plusNum
                  }px`,
                  zIndex: `${-3 + i}`,
                }}
              ></div>
            ))}
        {messageCount > 3 && (
          <div
            id="imageText"
            className={imageTextStyle}
            style={{ zIndex: `1` }}
          >
            +{messageCount}
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileImages;
