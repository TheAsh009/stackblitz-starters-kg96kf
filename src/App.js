import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [data1, setData] = useState('');
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data);
    const { advice } = data.slip;
    setData(advice);
    setCount((e) => e + 1);
    console.log(advice);

    useEffect(() => {
      getAdvice();
    }, []);
  }

  return (
    <>
      <h1>Hello StackBlitz!</h1>
      <p>{data1}</p>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </>
  );
}

const Message = function (props) {
  return (
    <>
      <p>
        You have read <strong>{props.count} pieces of Advice</strong>
      </p>
    </>
  );
};
