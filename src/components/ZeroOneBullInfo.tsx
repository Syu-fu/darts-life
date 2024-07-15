import React from "react";

type ZeroOneBullInfoProps = {
  bullCount: number;
  bullRate: number;
  lowTonCount: number;
  hatCount: number;
  expectedStats: number;
};

const ZeroOneBullInfo: React.FC<ZeroOneBullInfoProps> = ({
  bullCount,
  bullRate,
  lowTonCount,
  hatCount,
  expectedStats,
}) => {
  return (
    <div style={{ marginTop: "20px", textAlign: "center", width: "100%" }}>
      <div style={{ fontSize: "20px", marginBottom: "10px" }}>Statistics</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <div>
          <div style={{ fontSize: "18px" }}>Bull Hits</div>
          <div style={{ fontSize: "24px" }}>{bullCount}</div>
        </div>
        <div>
          <div style={{ fontSize: "18px" }}>Bull Rate</div>
          <div style={{ fontSize: "24px" }}>{bullRate.toFixed(1)}%</div>
        </div>
        <div>
          <div style={{ fontSize: "18px" }}>LowTon Count</div>
          <div style={{ fontSize: "24px" }}>{lowTonCount}</div>
        </div>
        <div>
          <div style={{ fontSize: "18px" }}>Hat Count</div>
          <div style={{ fontSize: "24px" }}>{hatCount}</div>
        </div>
        <div>
          <div style={{ fontSize: "18px" }}>Expected Stats</div>
          <div style={{ fontSize: "24px" }}>{expectedStats.toFixed(1)}</div>
        </div>
      </div>
    </div>
  );
};

export default ZeroOneBullInfo;
