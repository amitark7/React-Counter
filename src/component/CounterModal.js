import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CounterModal = ({
  showModal,
  setShowModal,
  counterObj,
  stopCounter,
  startCounter,
  counterTotal,
}) => {
  return (
    <Modal
      show={showModal}
      className="absolute flex justify-center top-[30%] left-[15%] gap-5 items-center p-6 flex-col mx-auto w-[70%] bg-black text-white h-[200px] text-center rounded-lg md:w-[30%] md:left-[35%] md:top-[40%]"
    >
      <Modal.Header>
        <Modal.Title className="text-5xl">{counterTotal}</Modal.Title>
      </Modal.Header>
      <Modal.Footer className="flex justify-center gap-4 items-center flex-col mt-4">
        <Button
          variant="secondary"
          className="text-lg border rounded-lg py-1 w-[130px] bg-green-400 outline-none border-none font-semibold"
          onClick={counterObj.isStart ? stopCounter : startCounter}
        >
          {counterObj.isStart ? "Pause" : "Start"}
        </Button>
        <Button
          variant="primary"
          className="text-lg border rounded-lg  py-1 w-[130px] bg-red-500 outline-none border-none font-semibold"
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CounterModal;
