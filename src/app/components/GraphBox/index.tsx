import Chart from "../GraphAdmin/index";

export const GraphBox = () => {
  return (
    <div className="graphBox">
      <div className="box">
        <Chart />
      </div>
      <div className="box">
        <Chart />
      </div>
    </div>
  );
};
