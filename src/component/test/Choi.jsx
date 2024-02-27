import { useState } from "react";
import Input from "../common/textField/Input/Input";
import SelectBox from "../common/textField/SelectBox/SelectBox";
import { SELECT_TYPE } from "../common/textField/SelectBox/selectType";

export function Choi() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleSelectValue = (value) => {
    setSelectValue(value);
  };
  const handleInputValue = (value) => {
    setInputValue(value);
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
      <h1>여기에 자유롭게 수정하면서 테스트 해보시면 됩니다!</h1>
    </div>
  );
}
