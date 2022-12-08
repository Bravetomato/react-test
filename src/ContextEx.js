import React, { createContext, useContext } from "react";
// createContext, useContext를 import한다
const ThemeContext = createContext("red");

const ContextEx = () => {
  const theme = useContext(ThemeContext);
  // ThemeContext변수에 들어간 red가 useContext 기본값으로 들어감?
  const style = {
    width: "100px",
    height: "100px",
    background: theme,
  };
  return (
    <>
      <div style={style} />
      {/* const style에서 정의한 내용이 반영된다 */}
    </>
  );
};

export default ContextEx;