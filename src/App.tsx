import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const {count} = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="h-screen w-full flex  justify-center items-center">
        <div className="flex">
          <button onClick={()=> dispatch(increment())} className="px-3 py-3 rounded-md font-semibold text-white bg-green-500 text-xl">Increment</button>
          <h1 className="text-3xl mx-5">{count}</h1>
          <button onClick={()=>dispatch(decrement())} className="px-3 py-3 rounded-md font-semibold text-white bg-red-500 text-xl">Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
