import "./Box.css";
export default function Box({ width, height, backgroundColor, removeBox }) {
  return (
    <div className="box">
      <div
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
        }}
      ></div>
      <button onClick={removeBox}>X</button>
    </div>
  );
}
