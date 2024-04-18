import React from "react";

const CounterModal = ({
  setShowModal,
  counterObj,
  stopCounter,
  startCounter,
  counterTotal,
}) => {
  return (
    <div className="absolute flex justify-center gap-4 items-center p-6 flex-col mx-auto w-[50%] bg-black text-white h-[200px] text-center rounded-lg md:w-[20%]">
      <h1 className="text-5xl">{counterTotal}</h1>
      <button
        className="text-lg border rounded-lg py-1 w-[130px] bg-green-400 outline-none border-none font-semibold"
        onClick={counterObj.isStart ? stopCounter : startCounter}
      >
        {counterObj.isStart ? "Pause" : "Start"}
      </button>
      <button
        className="text-lg border rounded-lg  py-1 w-[130px] bg-red-500 outline-none border-none font-semibold"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
    </div>
  );
};

export default CounterModal;
