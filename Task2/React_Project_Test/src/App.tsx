// import "./App.css";
import Toast from "ammar-toast-lib";

const App = () => {
  const handleToast = (type: "success" | "error" | "warning" | "info") => {
    Toast[type](`This is a ${type} message!`);
  };

  const handleCustomToast = () => {
    Toast.display({
      message: "This is a custom toast with different position and duration!",
      type: "success",
      position: "top-left",
      duration: 1000,
    });
  };

  const baseButtonClass =
    "text-white py-2 px-5 rounded cursor-pointer mr-2 mb-2 focus:outline-none w-[200px] rounded-2xl ";

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-16 text-center">
        React Project Test For Toast Library
      </h1>

      <div className="mb-4 flex justify-center flex-col items-center  ">
        <button
          className={`${baseButtonClass} bg-purple-700 `}
          onClick={handleCustomToast}
        >
          Show Custom Toast
        </button>
        <button
          className={`${baseButtonClass} bg-green-700`}
          onClick={() => handleToast("success")}
        >
          Show Success Toast
        </button>
        <button
          className={`${baseButtonClass} bg-red-700`}
          onClick={() => handleToast("error")}
        >
          Show Error Toast
        </button>
        <button
          className={`${baseButtonClass} bg-orange-700`}
          onClick={() => handleToast("warning")}
        >
          Show Warning Toast
        </button>
        <button
          className={`${baseButtonClass} bg-blue-700`}
          onClick={() => handleToast("info")}
        >
          Show Info Toast
        </button>
      </div>
    </div>
  );
};

export default App;
