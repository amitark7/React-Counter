import React, { useState } from "react";
import CounterModal from "./CounterModal";

const Counter = () => {
  const [showModal, setShowModal] = useState(false);
  const [counterTotal, setCounterTotal] = useState(0);
  const [counterObj, setCounterObj] = useState({
    intervalRef: null,
    isStart: false,
  });
  const startCounter = () => {
    const intervalRef = setInterval(() => {
      setCounterTotal((prevCounter) => prevCounter + 1);
    }, 1000);
    setCounterObj({ intervalRef, isStart: true });
  };
  const stopCounter = () => {
    clearInterval(counterObj.intervalRef);
    setCounterObj({ intervalRef: null, isStart: false });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center text-center text-white bg-slate-600">
      <button
        className="py-2 px-10 border rounded-lg text-xl bg-blue-500 mt-10 outline-none border-none"
        onClick={() => setShowModal(!showModal)}
      >
        Open Modal
      </button>
      {showModal && (
        <CounterModal
          showModal={showModal}
          setShowModal={setShowModal}
          counterObj={counterObj}
          startCounter={startCounter}
          stopCounter={stopCounter}
          counterTotal={counterTotal}
        />
      )}
    </div>
  );
};

export default Counter;
