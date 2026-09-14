import React,{useState,useEffect} from 'react'
const Increment = () => {
 
  const [count, setCount] = useState(0)
const tt = count % 2 == 0;
 useEffect(() => {
    console.log("UseEffect");
  }, [tt]);

const increment = () => {
  setCount(count + 1);
};
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Increment