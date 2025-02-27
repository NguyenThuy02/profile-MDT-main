import React, { useState } from "react";

const Icon = ({ children, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const LightIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </Icon>
);

const AlarmIcon = (props) => (
  <Icon {...props}>
    <path d="M6 10.6V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5.6M8 15h8M12 19v-4" />
    <path d="M15.6 15.6c2.5 2.5 4.4.3 4.4-1.6V9c0-4.4-3.6-8-8-8S4 4.6 4 9v5c0 1.9 1.9 4.1 4.4 1.6" />
  </Icon>
);

const TimerIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Icon>
);

const SensitivityIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  </Icon>
);

const Switch = ({ isOn, onToggle }) => (
  <label
    style={{
      display: "inline-block",
      width: "60px",
      height: "34px",
      position: "relative",
      cursor: "pointer",
    }}
  >
    <input
      type="checkbox"
      checked={isOn}
      onChange={onToggle}
      style={{ opacity: 0, width: 0, height: 0 }}
    />
    <span
      style={{
        position: "absolute",
        cursor: "pointer",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: isOn ? "#2196F3" : "#ccc",
        transition: ".4s",
        borderRadius: "34px",
      }}
    >
      <span
        style={{
          position: "absolute",
          content: '""',
          height: "26px",
          width: "26px",
          left: "4px",
          bottom: "4px",
          backgroundColor: "white",
          transition: ".4s",
          borderRadius: "50%",
          transform: isOn ? "translateX(26px)" : "translateX(0)",
        }}
      />
    </span>
  </label>
);

const Slider = ({ value, onChange, min, max }) => (
  <input
    type="range"
    min={min}
    max={max}
    value={value}
    onChange={onChange}
    style={{
      width: "100%",
      height: "25px",
      background: "#d3d3d3",
      outline: "none",
      opacity: "0.7",
      transition: "opacity .2s",
    }}
  />
);

const PlusPackage = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [isAlarmOn, setIsAlarmOn] = useState(false);
  const [motionDelay, setMotionDelay] = useState(5);
  const [sensitivity, setSensitivity] = useState(50);

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Gói Plus</h2>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <LightIcon color={isLightOn ? "#FFD700" : "#333"} />
            <span style={{ marginLeft: "10px" }}>Đèn thông minh</span>
          </div>
          <Switch isOn={isLightOn} onToggle={() => setIsLightOn(!isLightOn)} />
        </div>
        <p style={{ margin: 0, color: "#666" }}>
          {isLightOn ? "Đèn đang bật" : "Đèn đang tắt"}
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <AlarmIcon color={isAlarmOn ? "#FF4136" : "#333"} />
            <span style={{ marginLeft: "10px" }}>Còi báo động</span>
          </div>
          <Switch isOn={isAlarmOn} onToggle={() => setIsAlarmOn(!isAlarmOn)} />
        </div>
        <p style={{ margin: 0, color: "#666" }}>
          {isAlarmOn ? "Còi báo động đang bật" : "Còi báo động đang tắt"}
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <TimerIcon />
          <span style={{ marginLeft: "10px" }}>
            Thời gian trễ phát hiện chuyển động
          </span>
        </div>
        <Slider
          value={motionDelay}
          onChange={(e) => setMotionDelay(e.target.value)}
          min={0}
          max={30}
        />
        <p style={{ margin: "5px 0 0", color: "#666" }}>{motionDelay} giây</p>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <SensitivityIcon />
          <span style={{ marginLeft: "10px" }}>Độ nhạy cảm biến</span>
        </div>
        <Slider
          value={sensitivity}
          onChange={(e) => setSensitivity(e.target.value)}
          min={0}
          max={100}
        />
        <p style={{ margin: "5px 0 0", color: "#666" }}>{sensitivity}%</p>
      </div>
    </div>
  );
};

const SmartHomeDashboard = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "24px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          padding: "32px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "32px",
            color: "white",
            textAlign: "center",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Hệ Thống Nhà Thông Minh
        </h1>
        <PlusPackage />
      </div>
    </div>
  );
};

export default SmartHomeDashboard;
