import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
    // case가 increment면 +1, case가 decrement면 -1, 둘 다 아니면 default로 가서 리턴.
  }
}

const ReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // dispatch는 위의 함수를 실행시킨다.
  // reducer는 state를 업데이트한다. value값은 0
  return (
    <>
      <h1>현재 값은 {state.value} 입니다.</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </>
  );
};

export default ReducerEx;