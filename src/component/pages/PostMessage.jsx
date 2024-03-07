import { useCallback, useEffect, useRef, useState } from "react";
import Input from "../common/textField/input/Input";
import SelectBox from "../common/textField/selectBox/SelectBox";
import TextArea from "../common/textField/textArea/TextArea";
import { SELECT_TYPE } from "../common/textField/selectBox/selectType";
import { getProfileImagesApiResponse } from "../../util/api";
import styles from "./PostMessage.module.css";
import Button from "../common/button/Button";
import { fontMappings } from "../common/textField/selectBox/fontMappings";
import UserProfileOption from "../common/option/UserProfileOption";
import baseProfile from "../../asset/img/optionIcon/base_profile_icon.png";
import { useParams, useNavigate } from "react-router-dom";
import { postMessageApiResponse } from "../../util/api";
import ProfileImgSelectList from "../common/option/ProfileImgSelectList";
import { PLACEHOLDER } from "../common/textField/input/placeholder";

function PostMessage() {
  const [nameValue, setNameValue] = useState("");
  const [currentRelation, setCurrentRelation] = useState("");
  const [currentFont, setCurrentFont] = useState("");
  const [quillValue, setQuillValue] = useState("");
  const [profileImgList, setProfileImgList] = useState([]);
  const [currentProfileImg, setCurrentProfileImg] = useState(baseProfile);

  const navigate = useNavigate();
  const { postId } = useParams();

  const textContainerRef = useRef(null);

  const handleInputValue = useCallback((value) => {
    setNameValue(value);
  }, []);
  const handleCurrentRelation = useCallback((value) => {
    setCurrentRelation(value);
  }, []);
  const handleCurrentFont = useCallback((font) => {
    setCurrentFont(font);
  }, []);
  const handleQuillValue = useCallback((value) => {
    const cleanedHtml = value.replace(/<p><br><\/p>/g, "");
    setQuillValue(cleanedHtml);
  }, []);
  const handleClickProfileImgList = useCallback(
    (idx) => {
      setCurrentProfileImg(profileImgList[idx]);
    },
    [profileImgList]
  );
  const handleChangeProfileImg = useCallback((value) => {
    setCurrentProfileImg(value);
  }, []);

  const getImgProfileList = useCallback(async () => {
    const res = await getProfileImagesApiResponse();
    setProfileImgList(res.imageUrls);
    setCurrentProfileImg(res.imageUrls[0]);
  }, []);

  const changeFontFamily = useCallback((type) => {
    const fontStyle = fontMappings[type];
    const textContainer = textContainerRef.current.getEditor().root;
    textContainer.style.fontFamily = fontStyle;
  }, []);

  const postData = useCallback(() => {
    const data = {
      recipientId: postId,
      sender: nameValue,
      profileImageURL: currentProfileImg,
      relationship: currentRelation,
      content: quillValue,
      font: currentFont,
      createdAt: new Date().getTime(),
    };

    postMessageApiResponse(data, postId).then(() => {
      navigate(`/post/${postId}`);
    });
  }, [
    postId,
    nameValue,
    currentProfileImg,
    currentRelation,
    quillValue,
    currentFont,
    navigate,
  ]);

  useEffect(() => {
    getImgProfileList();
  }, [getImgProfileList]);

  useEffect(() => {
    changeFontFamily(currentFont);
  }, [changeFontFamily, currentFont]);

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.inputTitle}>From.</div>
        <div className={styles.inputContainer}>
          <Input
            inputValue={nameValue}
            onInputValueChange={handleInputValue}
            placeHolderType={PLACEHOLDER.from}
          />
        </div>

        <div className={styles.profileImgTitle}>프로필 이미지</div>
        <div className={styles.allProfileImgContainer}>
          <UserProfileOption
            currentProfileImg={currentProfileImg}
            onChangeProfileImg={handleChangeProfileImg}
          />
          <div>
            <div className={styles.porfileImgText}>
              프로필 이미지를 선택해주세요!
            </div>
            <div className={styles.profileImgContainer}>
              {profileImgList?.map((profileImg, i) => (
                <ProfileImgSelectList
                  key={i}
                  idx={i}
                  profileImg={profileImg}
                  onClickImg={handleClickProfileImgList}
                  isSelected={currentProfileImg === profileImg}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.selectBoxTitle}>상대와의 관계</div>
        <div className={styles.selectBoxContainer}>
          <SelectBox
            selectValue={currentRelation}
            onSelectValueChange={handleCurrentRelation}
            selectType={SELECT_TYPE.relation}
          />
        </div>

        <div className={styles.textAreaTitle}>내용을 입력해주세요</div>
        <div className={styles.textAreaContainer}>
          <TextArea
            onQuillValueChange={handleQuillValue}
            textContainerRef={textContainerRef}
          />
        </div>

        <div className={styles.selectBoxTitle}>폰트선택</div>
        <div className={styles.fontSelectBoxContainer}>
          <SelectBox
            selectValue={currentFont}
            onSelectValueChange={handleCurrentFont}
            selectType={SELECT_TYPE.font}
          />
        </div>
        <Button
          type={"primary"}
          width={"100%"}
          height="tall"
          onClick={postData}
          disabled={nameValue && quillValue ? false : true}
        >
          생성하기
        </Button>
      </div>
    </div>
  );
}

export default PostMessage;
