import "./Box.css";
export default function Box({ width, height, backgroundColor, removeBox }) {
  return (
    <div className="box">
      <div
        data-testid="box"
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
        }}
      ></div>
      <button aria-label="Remove box" onClick={removeBox}>
        X
      </button>
    </div>
  );
}
