import React, { useState, useEffect } from "react";

const Counter = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });
  //cleanup 업데이트 전 내용 보임
  //effect 업데이트 이후 최신 내용 보임
  // 빈배열 넣으면 렌더링 과정 안보임
  return (
    <>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickname}></input>
      </div>
    </>
  );
};

export default Counter;