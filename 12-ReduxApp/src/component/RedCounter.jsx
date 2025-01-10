import { useDispatch, useSelector } from "react-redux";
import { inc ,dec ,incByVal } from "../redux/counterSlice";

export const RedCounter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <>
      <h1>I am Redux Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(inc())}>+</button>
      <button onClick={()=>dispatch(dec())}>-</button>
      <button onClick={()=>dispatch(incByVal(5))}>+5</button>
      
    </>
  );
};
