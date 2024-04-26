function App() {
  return (
    <>
      <div className="h-screen w-full flex  justify-center items-center">
        <div className="flex">
          <button className="px-3 py-3 rounded-md font-semibold text-white bg-green-500 text-xl">Increment</button>
          <h1 className="text-3xl mx-5">0</h1>
          <button className="px-3 py-3 rounded-md font-semibold text-white bg-red-500 text-xl">Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
