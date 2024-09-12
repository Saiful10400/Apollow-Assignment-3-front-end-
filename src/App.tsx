import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,makeZero, incrementByValue } from "./Redux/feathcer/counterSlice";

const App = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.counterStore.count)  // count is from slice count.
  return (
    <div className="flex justify-center gap-x-7 mt-5">
      <button onClick={()=>dispatch(increment())} className="text-xl border border-black rounded-lg px-2 py-1">
        Increment
      </button>
      <button onClick={()=>dispatch(makeZero())} className="text-xl border border-black rounded-lg px-2 py-1">
        Make it Zero
      </button>
      <h1 className="text-4xl">{data}</h1>
      <button onClick={()=>dispatch(decrement())} className="text-xl border border-black rounded-lg px-2 py-1 ">
        Decrement
      </button>
      <button onClick={()=>dispatch(incrementByValue(500))} className="btn-lg btn btn-success">
        Increment By 500
      </button> 
    </div>
  );
};

export default App;
