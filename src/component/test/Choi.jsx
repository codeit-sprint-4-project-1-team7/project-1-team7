import { useState } from "react";
import Input from "../common/textField/input/Input";
import SelectBox from "../common/textField/selectBox/SelectBox";
import TextArea from "../common/textField/textArea/TextArea";
import { SELECT_TYPE } from "../common/textField/selectBox/selectType";
import DOMPurify from "dompurify";

export function Choi() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [quillValue, setQuillValue] = useState("");

  const handleSelectValue = (value) => {
    setSelectValue(value);
  };
  const handleInputValue = (value) => {
    setInputValue(value);
  };
  const handleQuillValue = (value) => {
    setQuillValue(value);
  };

  return (
    <div>
      {inputValue}
      <Input inputValue={inputValue} onInputValueChange={handleInputValue} />
      <br />
      {selectValue}
      <br />
      <SelectBox
        selectValue={selectValue}
        onSelectValueChange={handleSelectValue}
        selectType={SELECT_TYPE.relation}
      />
      <br />
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(quillValue),
        }}
        className="dompurifyBox"
      />

      <br />
      <div style={{ fontSize: "16px" }}>{quillValue}</div>
      <br />
      <TextArea onQuillValueChange={handleQuillValue} />
      <h1>여기에 자유롭게 수정하면서 테스트 해보시면 됩니다!</h1>

      <ol>
        <li style={{ fontSize: "16px" }}>asdfsf</li>
        <li>2adfasf</li>
        <li>3asfddasf</li>
      </ol>
      <ul>
        <li style={{ fontSize: "16px" }}>asdfsf</li>
        <li>2adfasf</li>
        <li>3asfddasf</li>
      </ul>
    </div>
  );
}
