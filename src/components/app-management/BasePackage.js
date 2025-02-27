import React, { useState } from "react";

const SmartHomeControl = ({ icon, title, isOn, onToggle }) => {
  const Icon = icon;
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon
            style={{
              width: "32px",
              height: "32px",
              color: isOn ? "#EAB308" : "#9CA3AF",
            }}
          />
          <h3
            style={{
              marginLeft: "12px",
              fontSize: "18px",
              fontWeight: "600",
              color: "#1F2937",
            }}
          >
            {title}
          </h3>
        </div>
        <label
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <input
            type="checkbox"
            checked={isOn}
            onChange={onToggle}
            style={{ display: "none" }}
          />
          <div
            style={{
              width: "56px",
              height: "28px",
              backgroundColor: isOn ? "#10B981" : "#D1D5DB",
              borderRadius: "9999px",
              position: "relative",
              transition: "background-color 0.3s",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                backgroundColor: "white",
                borderRadius: "50%",
                top: "4px",
                left: isOn ? "32px" : "4px",
                transition: "left 0.3s",
              }}
            ></div>
          </div>
        </label>
      </div>
      <p style={{ fontSize: "14px", color: "#4B5563" }}>
        {isOn ? "Đang bật" : "Đang tắt"}
      </p>
    </div>
  );
};

const SmartHomeDashboard = () => {
  const [lightOn, setLightOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [fanOn, setFanOn] = useState(false);

  // Simple icon components
  const LightIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );

  const ACIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z" />
      <path d="M12 7v10" />
      <path d="M7 7v10" />
      <path d="M17 7v10" />
      <path d="M2 12h20" />
    </svg>
  );

  const FanIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 12c-3.2 0-5-2.667-5-4 0-3.333 1.8-6 5-6s5 2.667 5 6c0 1.333-1.8 4-5 4z" />
      <path d="M12 12c0 3.2-2.667 5-4 5-3.333 0-6-1.8-6-5s2.667-5 6-5c1.333 0 4 1.8 4 5z" />
      <path d="M12 12c3.2 0 5 2.667 5 4 0 3.333-1.8 6-5 6s-5-2.667-5-6c0-1.333 1.8-4 5-4z" />
    </svg>
  );

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
        <div>
          <SmartHomeControl
            icon={LightIcon}
            title="Đèn thông minh"
            isOn={lightOn}
            onToggle={() => setLightOn(!lightOn)}
          />
          <SmartHomeControl
            icon={ACIcon}
            title="Điều hòa"
            isOn={acOn}
            onToggle={() => setAcOn(!acOn)}
          />
          <SmartHomeControl
            icon={FanIcon}
            title="Quạt thông minh"
            isOn={fanOn}
            onToggle={() => setFanOn(!fanOn)}
          />
        </div>
      </div>
    </div>
  );
};

export default SmartHomeDashboard;
