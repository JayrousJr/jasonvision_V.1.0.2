import { useEffect, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
function PopUp({ props }) {
  const success = props;
  const duration = 7000;
  const [messageVisible, setMessageVisible] = useState(false);
  useEffect(() => {
    if (success) {
      setMessageVisible(true);
      const timer = setTimeout(() => {
        setMessageVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [success, duration]);
  return (
    <div className="fixed top-[50%] left-[30%] right-[30%]  max-w-4xl mx-auto z-10">
      {messageVisible && (
        <div className="flex flex-col item-center rounded-md py-2 justify-center bg-emerald-500">
          <GiCheckMark className="text-white  mx-auto text-2xl l border-white" />
          <div className="text-white p-4 text-md text-center">{success}</div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
//  left-[50%] bottom-[50%] right-[50%] top-[50%]
