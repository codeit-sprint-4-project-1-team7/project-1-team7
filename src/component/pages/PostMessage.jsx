import { useEffect, useState } from "react";
import Input from "../common/textField/input/Input";
import SelectBox from "../common/textField/selectBox/SelectBox";
import TextArea from "../common/textField/textArea/TextArea";
import { SELECT_TYPE } from "../common/textField/selectBox/selectType";
import { getProfileImagesApiResponse } from "../../util/api";
import styles from "./PostMessage.module.css";
// import DOMPurify from "dompurify";

function PostMessage() {
  const [inputValue, setInputValue] = useState("");
  const [currentRelation, setCurrentRelation] = useState("");
  const [currentFont, setCurrentFont] = useState("");
  const [quillValue, setQuillValue] = useState("");
  const [profileImgList, setProfileImgList] = useState([]);

  const handleInputValue = (value) => {
    setInputValue(value);
  };
  const handleCurrentRelation = (value) => {
    setCurrentRelation(value);
  };
  const handleCurrentFont = (font) => {
    setCurrentFont(font);
  };
  const handleQuillValue = (value) => {
    setQuillValue(value);
  };

  const getImgProfileList = async () => {
    const res = await getProfileImagesApiResponse();
    setProfileImgList(res.imageUrls);
  };

  useEffect(() => {
    getImgProfileList();
  }, []);

  return (
    <div className={styles.container}>
      <div>From</div>
      <Input inputValue={inputValue} onInputValueChange={handleInputValue} />

      <div>프로필 이미지</div>
      {profileImgList?.map((profileImg, i) => (
        <img key={i} src={profileImg} alt="profileImg" />
      ))}

      <div>상대와의 관계</div>
      <SelectBox
        selectValue={currentRelation}
        onSelectValueChange={handleCurrentRelation}
        selectType={SELECT_TYPE.relation}
      />

      <div>내용을 입력해주세요</div>
      <TextArea onQuillValueChange={handleQuillValue} />

      <div>폰트선택</div>
      <SelectBox
        selectValue={currentFont}
        onSelectValueChange={handleCurrentFont}
        selectType={SELECT_TYPE.font}
      />
    </div>
  );
}

export default PostMessage;
