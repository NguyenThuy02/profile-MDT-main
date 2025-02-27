import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SmartHomeControl = ({ icon: Icon, title, isOn, onToggle }) => {
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

const MotionEventItem = ({ time, location }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid #E5E7EB",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#EF4444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <span
        style={{
          marginLeft: "8px",
          fontSize: "14px",
          fontWeight: "500",
          color: "#374151",
        }}
      >
        {location}
      </span>
    </div>
    <span style={{ fontSize: "14px", color: "#6B7280" }}>{time}</span>
  </div>
);

const PremiumSmartHomeDashboard = () => {
  const [lightOn, setLightOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [fanOn, setFanOn] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [motionEvents, setMotionEvents] = useState([]);
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    // Simulating fetching motion events
    const mockMotionEvents = [
      { time: "10:30 AM", location: "Cửa chính" },
      { time: "2:45 PM", location: "Phòng khách" },
      { time: "7:15 PM", location: "Sân sau" },
    ];
    setMotionEvents(mockMotionEvents);

    // Simulating energy usage data
    const mockEnergyData = [
      { name: "T2", usage: 30 },
      { name: "T3", usage: 25 },
      { name: "T4", usage: 35 },
      { name: "T5", usage: 27 },
      { name: "T6", usage: 32 },
      { name: "T7", usage: 20 },
      { name: "CN", usage: 15 },
    ];
    setEnergyData(mockEnergyData);
  }, []);

  // Simple icon components
  const HomeIcon = (props) => (
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
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
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

  const CameraIcon = (props) => (
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
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "white",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Hệ Thống Nhà Thông Minh Premium
          </h1>
          <div style={{ display: "flex", gap: "16px" }}>
            <button style={{ color: "white" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </button>
            <button style={{ color: "white" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
                marginBottom: "16px",
              }}
            >
              Điều khiển thiết bị
            </h2>
            <SmartHomeControl
              icon={HomeIcon}
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
            <SmartHomeControl
              icon={CameraIcon}
              title="Camera an ninh"
              isOn={cameraOn}
              onToggle={() => setCameraOn(!cameraOn)}
            />
          </div>

          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
                marginBottom: "16px",
              }}
            >
              Lịch sử phát hiện chuyển động
            </h2>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "16px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {motionEvents.map((event, index) => (
                <MotionEventItem
                  key={index}
                  time={event.time}
                  location={event.location}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "white",
              marginBottom: "16px",
            }}
          >
            Biểu đồ sử dụng năng lượng
          </h2>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="usage"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "#3B82F6",
              color: "white",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2563EB";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#3B82F6";
              e.target.style.transform = "scale(1)";
            }}
            onClick={() => {
              // Xử lý logic tạo báo cáo ở đây
              console.log("Tạo báo cáo chi tiết");
            }}
          >
            Tạo báo cáo chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumSmartHomeDashboard;
