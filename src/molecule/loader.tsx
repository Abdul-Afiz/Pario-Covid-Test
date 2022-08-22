import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Loader = ({
  text,
  value,
  textColor,
  pathColor,
  title,
  maxValue,
}: {
  text?: string;
  textColor?: string;
  pathColor?: string;
  value?: number;
  title?: string;
  maxValue?: number;
}) => {
  return (
    <div className=" flex flex-col items-center text-center bg-white p-7 my-5 rounded-lg ">
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar
          value={value as number}
          maxValue={maxValue}
          text={text}
          styles={buildStyles({
            // Text size
            textSize: "1rem",
            // Colors
            pathColor: pathColor ?? "#f88",
            textColor: textColor ?? "#f43",
            trailColor: "#e1e1e1",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      <h1 className="text-2xl my-4">{title}</h1>
    </div>
  );
};

export default Loader;
