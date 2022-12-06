import React, { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0; 
  // 입력값이 없으면 0으로 리턴한다
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
// useMemo를 사용하지 않을 때 평균값 연산하는 법은 위와 같다. 
const MemoEx = () => {
  const [list, setList] = useState([]); 
  // usestate에 기본값으로 빈 배열 값을 넣어줌
  const [number, setNumber] = useState(""); 

  const onChange = (e) => { 
    setNumber(e.target.value);
    // value값이 작성되면(e) 작성되는 값으로 변화한다.
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    // concat: 두개의 문자열을 하나의 문자열로 만들어주는 함수.
    // parseInt: 정수화해주는 함수.
    setList(nextList);
    setNumber("");
    // setNumber("") -> 초기화. 초기화 시키는 이유는 input창에 입력 후 값이 지워지게 하기 위해
  };

  const avg = useMemo(() => getAverage(list, [list]));
  // list 배열이 바뀔때만 연산. 원래 같은 값이 등록되어도 렌더링이 되는데, useMemo를 사용하면 불필요한 렌더링을 하지 않음

  return (
    <>
      <input value={number} onChange={onChange} /> 
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <h2>
          평균 값 : <p>{avg}</p>
          {/* avg함수를 호출 */}
        </h2>
      </div>
    </>
  );
};

export default MemoEx;