// components/LoadingSpinner.jsx
import { ScaleLoader } from "react-spinners";

const LoadingSpinner = ({ size = 50, color = "#3b82f6" }) => {
  return (
    <div className="flex justify-center items-center p-8">
      <ScaleLoader color={color} aria-label="Loading Spinner" />
    </div>
  );
};

export default LoadingSpinner;
