// import React, { useState } from 'react';
// import { Image } from '@mantine/core';
// import { IoNotificationsOutline } from "react-icons/io5";
// import SOS from "../assets/emergency-icon.png";

// const Alertsecondpage = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   // 👉 PROGRESS STATES
//   const [progressActive, setProgressActive] = useState(false);
//   const [progressValue, setProgressValue] = useState(0);
//   const [progressDone, setProgressDone] = useState(false);

//   return (
//     <div>
//       {/* HEADER */}
//       <div
//         style={{
//           width: "100%",
//           height: "70px",
//           background: "#ffffff",
//           borderBottom: "3px solid #E9E9E9",
//           borderRadius: "4px",
//           padding: "0 20px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* LEFT: LOGO + BIG SOS TEXT */}
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           <Image
//             src={SOS}
//             alt="Logo"
//             width={70}
//             height={70}
//             radius="md"
//             fit="contain"
//             style={{
//               marginLeft: "1px",
//             }}
//           />

//           {/* Highlighted SOS Text */}
//           <span
//             style={{
//               fontSize: "28px",
//               fontWeight: "700",
//               color: "#D7263D",
//               letterSpacing: "1px",
//               marginTop: "11px",
//             }}
//           >
//             SOS
//           </span>
//         </div>

//         {/* RIGHT: ICON */}
//         <IoNotificationsOutline
//           size={35}
//           width={70}
//           height={70}
//           style={{
//             cursor: "pointer",
//             color: "#333",
//           }}
//         />
//       </div>

//       {/* MAIN ALERT CARD */}
//       <div
//         style={{
//           width: "350px",
//           background: "#fff",
//           borderRadius: "12px",
//           padding: "20px",
//           marginTop: "30px",
//           marginLeft: "20px",
//           boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
//         }}
//       >
//         {/* CARD TITLE */}
//         <h2 style={{ margin: 0, fontSize: "22px", color: "#333" }}>
//           Alert Card Title
//         </h2>

//         {/* SUB TITLE */}
//         <p style={{ marginTop: "5px", color: "#777", fontSize: "14px" }}>
//           Emergency Notification
//         </p>

//         {/* PARAGRAPH */}
//         <p
//           style={{
//             marginTop: "15px",
//             fontSize: "14px",
//             lineHeight: "20px",
//             color: "#555",
//           }}
//         >
//           This is an alert information card. You can write any message here.
//           It supports multiple lines and looks clean with a shadow effect.
//         </p>

//         {/* ACTION BUTTON – opens popup */}
//         <button
//           style={{
//             padding: "12px 26px",
//             marginTop: "12px",
//             background: "linear-gradient(135deg, #D7263D, #B71C1C)",
//             border: "none",
//             color: "#fff",
//             fontSize: "15px",
//             fontWeight: "600",
//             borderRadius: "10px",
//             cursor: "pointer",
//             letterSpacing: "0.5px",
//             boxShadow: "0px 4px 12px rgba(215, 38, 61, 0.4)",
//             transition: "all 0.25s ease-in-out",
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.transform = "translateY(-3px)";
//             e.target.style.boxShadow =
//               "0px 8px 18px rgba(215, 38, 61, 0.6)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = "translateY(0px)";
//             e.target.style.boxShadow =
//               "0px 4px 12px rgba(215, 38, 61, 0.4)";
//           }}
//           onClick={() => setShowPopup(true)}
//         >
//           ACTION
//         </button>
//       </div>

//       {/* POPUP */}
//       {showPopup && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.4)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//         >
//           <div
//             style={{
//               width: "320px",
//               background: "#fff",
//               borderRadius: "12px",
//               padding: "25px",
//               textAlign: "center",
//               boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//             }}
//           >
//             {/* GREEN TICK */}
//             <div
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 borderRadius: "50%",
//                 background: "#28C76F",
//                 margin: "0 auto",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <span
//                 style={{ color: "#fff", fontSize: "40px", fontWeight: "700" }}
//               >
//                 ✓
//               </span>
//             </div>

//             {/* MESSAGE */}
//             <h3 style={{ marginTop: "15px", color: "#333" }}>
//               Confirm Action?
//             </h3>

//             <p style={{ color: "#777", marginBottom: "20px" }}>
//               Are you sure you want to continue?
//             </p>

//             {/* YES BUTTON – starts progress */}
//             <button
//               style={{
//                 padding: "12px 26px",
//                 background: "linear-gradient(135deg, #28C76F, #1E9E5A)",
//                 border: "none",
//                 color: "#fff",
//                 borderRadius: "10px",
//                 fontSize: "15px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 letterSpacing: "0.5px",
//                 boxShadow: "0px 4px 12px rgba(40, 199, 111, 0.4)",
//                 transition: "all 0.25s ease-in-out",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "translateY(-3px)";
//                 e.target.style.boxShadow =
//                   "0px 8px 18px rgba(40, 199, 111, 0.6)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "translateY(0px)";
//                 e.target.style.boxShadow =
//                   "0px 4px 12px rgba(40, 199, 111, 0.4)";
//               }}
//               onClick={() => {
//                 // Close popup
//                 setShowPopup(false);

//                 // Start progress bar
//                 setProgressActive(true);
//                 setProgressValue(0);
//                 setProgressDone(false);

//                 let interval = setInterval(() => {
//                   setProgressValue((prev) => {
//                     if (prev >= 100) {
//                       clearInterval(interval);
//                       setProgressDone(true);
//                       return 100;
//                     }
//                     return prev + 2; // 2% every second → ~50 seconds
//                   });
//                 }, 1000);
//               }}
//             >
//               YES ✔
//             </button>
//           </div>
//         </div>
//       )}

//       {/* PROGRESS BAR CARD */}
//       {progressActive && (
//         <div
//           style={{
//             width: "350px",
//             background: "#fff",
//             borderRadius: "12px",
//             padding: "20px",
//             marginTop: "20px",
//             marginLeft: "20px",
//             boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
//             transition: "0.3s",
//           }}
//         >
//           <h2 style={{ margin: 0, fontSize: "20px", color: "#333" }}>
//             {progressDone ? "Completed!" : "Processing..."}
//           </h2>

//           <p style={{ marginTop: "5px", color: "#777", fontSize: "14px" }}>
//             {progressDone
//               ? "Your action has been successfully completed."
//               : "Please wait, processing your request..."}
//           </p>

//           {/* OUTER BAR */}
//           <div
//             style={{
//               width: "100%",
//               height: "14px",
//               background: "#EEE",
//               borderRadius: "8px",
//               overflow: "hidden",
//               marginTop: "15px",
//             }}
//           >
//             {/* FILL */}
//             <div
//               style={{
//                 width: `${progressValue}%`,
//                 height: "100%",
//                 background: progressDone
//                   ? "#28C76F"
//                   : "linear-gradient(135deg, #FF9F43, #FF6F20)",
//                 borderRadius: "8px",
//                 transition: "width 0.4s ease",
//               }}
//             ></div>
//           </div>

//           <p
//             style={{
//               marginTop: "10px",
//               color: progressDone ? "#28C76F" : "#FF6F20",
//               fontWeight: "600",
//             }}
//           >
//             {progressDone
//               ? "Progress Completed ✔"
//               : `In Progress... ${progressValue}%`}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Alertsecondpage;
// import React, { useState } from 'react';
// import { Image } from '@mantine/core';
// import { IoNotificationsOutline } from "react-icons/io5";
// import SOS from "../assets/emergency-icon.png";

// const Alertsecondpage = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [progressActive, setProgressActive] = useState(false);
//   const [progressValue, setProgressValue] = useState(0);
//   const [progressDone, setProgressDone] = useState(false);

//   return (
//     <div>

//       {/* HEADER */}
//       <div
//         style={{
//           width: "100%",
//           height: "70px",
//           background: "#ffffff",
//           borderBottom: "3px solid #E9E9E9",
//           borderRadius: "4px",
//           padding: "0 20px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* LEFT SIDE */}
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           <Image src={SOS} width={70} height={70} fit="contain"style={{
//               marginLeft: "1px",
//   }} />
//           <span style={{ fontSize: "28px", fontWeight: "700", color: "#D7263D" ,letterSpacing: "1px",
//               marginTop: "11px",}}>
//             SOS
//           </span>
//         </div>

//         {/* RIGHT SIDE ICON */}
//         <IoNotificationsOutline size={35} style={{ cursor: "pointer",color: "#333", }} />
//       </div>

//       {/* MAIN CARD */}
//       <div
//         style={{
//           width: "350px",
//           background: "#fff",
//           borderRadius: "12px",
//           padding: "20px",
//           marginTop: "30px",
//           marginLeft: "20px",
//           boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
//         }}
//       >
//         <h2 style={{ margin: 0 }}>Alert Card Title</h2>
//         <p style={{ color: "#777", marginTop: "5px" }}>Emergency Notification</p>

//         {/* CONDITIONAL CONTENT */}
//         {!progressActive ? (
//           <>
//             <p style={{ marginTop: "15px", color: "#555" }}>
//               This is an alert information card. You can write any message here.
//             </p>

//             {/* ACTION BUTTON WITH ORIGINAL CSS */}
//             <button
//               style={{
//                 padding: "12px 26px",
//                 marginTop: "12px",
//                 background: "linear-gradient(135deg, #D7263D, #B71C1C)",
//                 border: "none",
//                 color: "#fff",
//                 fontSize: "15px",
//                 fontWeight: "600",
//                 borderRadius: "10px",
//                 cursor: "pointer",
//                 letterSpacing: "0.5px",
//                 boxShadow: "0px 4px 12px rgba(215, 38, 61, 0.4)",
//                 transition: "all 0.25s ease-in-out",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "translateY(-3px)";
//                 e.target.style.boxShadow = "0px 8px 18px rgba(215, 38, 61, 0.6)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "translateY(0px)";
//                 e.target.style.boxShadow = "0px 4px 12px rgba(215, 38, 61, 0.4)";
//               }}
//               onClick={() => setShowPopup(true)}
//             >
//               ACTION
//             </button>
//           </>
//         ) : (
//           <>
//             {/* PROGRESS UI */}
//             <h3 style={{ color: progressDone ? "#28C76F" : "#FF6F20" }}>
//               {progressDone ? "Completed!" : "Processing..."}
//             </h3>

//             <div
//               style={{
//                 width: "100%",
//                 height: "14px",
//                 background: "#EEE",
//                 borderRadius: "8px",
//                 overflow: "hidden",
//                 marginTop: "15px",
//               }}
//             >
//               <div
//                 style={{
//                   width: `${progressValue}%`,
//                   height: "100%",
//                   transition: "0.3s",
//                   background: progressDone
//                     ? "#28C76F"
//                     : "linear-gradient(135deg, #FF9F43, #FF6F20)",
//                 }}
//               ></div>
//             </div>

//             <p
//               style={{
//                 marginTop: "10px",
//                 fontWeight: "600",
//                 color: progressDone ? "#28C76F" : "#FF6F20",
//               }}
//             >
//               {progressDone
//                 ? "Progress Completed ✔"
//                 : `In Progress... ${progressValue}%`}
//             </p>
//           </>
//         )}
//       </div>

//       {/* POPUP */}
//       {showPopup && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.4)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//         >
//           <div
//             style={{
//               width: "320px",
//               background: "#fff",
//               borderRadius: "12px",
//               padding: "25px",
//               textAlign: "center",
//               boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//             }}
//           >
//             <div
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 background: "#28C76F",
//                 borderRadius: "50%",
//                 margin: "0 auto",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <span style={{ fontSize: "40px", color: "#fff" }}>✓</span>
//             </div>

//             <h3 style={{ marginTop: "15px", color: "#333" }}>
//               Confirm Action?
//             </h3>

//             <p style={{ color: "#777", marginBottom: "20px" }}>
//               Are you sure you want to continue?
//             </p>

//             {/* YES BUTTON WITH ORIGINAL CSS */}
//             <button
//               style={{
//                 padding: "12px 26px",
//                 background: "linear-gradient(135deg, #28C76F, #1E9E5A)",
//                 border: "none",
//                 color: "#fff",
//                 borderRadius: "10px",
//                 fontSize: "15px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 letterSpacing: "0.5px",
//                 boxShadow: "0px 4px 12px rgba(40, 199, 111, 0.4)",
//                 transition: "all 0.25s ease-in-out",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "translateY(-3px)";
//                 e.target.style.boxShadow =
//                   "0px 8px 18px rgba(40, 199, 111, 0.6)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "translateY(0px)";
//                 e.target.style.boxShadow =
//                   "0px 4px 12px rgba(40, 199, 111, 0.4)";
//               }}
//               onClick={() => {
//                 setShowPopup(false);
//                 setProgressActive(true);
//                 setProgressValue(0);
//                 setProgressDone(false);

//                 let interval = setInterval(() => {
//                   setProgressValue((prev) => {
//                     if (prev >= 100) {
//                       clearInterval(interval);
//                       setProgressDone(true);
//                       return 100;
//                     }
//                     return prev + 2;
//                   });
//                 }, 1000);
//               }}
//             >
//               YES ✔
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Alertsecondpage;
import React, { useState, useEffect } from 'react';
import { Image } from '@mantine/core';
import { IoNotificationsOutline } from "react-icons/io5";
import SOS from "../assets/emergency-icon.png";
import mqtt from "mqtt";

const Alertsecondpage = () => {

  // FIRST CARD STATES
  const [showPopup1, setShowPopup1] = useState(false);
  const [progressActive1, setProgressActive1] = useState(false);
  const [progressValue1, setProgressValue1] = useState(0);
  const [progressDone1, setProgressDone1] = useState(false);

  // SECOND CARD STATES (MQTT CARD)
  const [mqttCardVisible, setMqttCardVisible] = useState(false);
  const [mqttMessage, setMqttMessage] = useState("");

  const [showPopup2, setShowPopup2] = useState(false);
  const [progressActive2, setProgressActive2] = useState(false);
  const [progressValue2, setProgressValue2] = useState(0);
  const [progressDone2, setProgressDone2] = useState(false);

  // ---------------- MQTT ----------------
  useEffect(() => {
    const mqttClient = mqtt.connect("wss://broker.emqx.io:8084/mqtt");

    mqttClient.on("connect", () => {
      console.log("Connected to MQTT Broker");
      mqttClient.subscribe("React");
    });

    mqttClient.on("message", (topic, msg) => {
      try {
        const data = JSON.parse(msg.toString());

        if (data.location && data.location !== "OFF") {
          setMqttMessage(data.location);
          setMqttCardVisible(true);
        }

        if (data.location === "OFF") {
          setMqttCardVisible(false);
        }
      } catch (e) {
        console.log("Invalid JSON");
      }
    });

    return () => mqttClient.end();
  }, []);

  // ---------------- CARD UI TEMPLATE (RE-USABLE) ----------------
  const renderCard = (
    title,
    message,
    progressActive,
    progressValue,
    progressDone,
    setShowPopup
  ) => (
    <div
      style={{
        width: "350px",
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        marginTop: "30px",
        marginLeft: "20px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
      }}
    >
      <h2 style={{ margin: 0 }}>{title}</h2>
      <p style={{ color: "#777", marginTop: "5px" }}>Emergency Notification</p>

      {!progressActive ? (
        <>
          <p style={{ marginTop: "15px", color: "#555" }}>{message}</p>

          <button
            style={{
              padding: "12px 26px",
              marginTop: "12px",
              background: "linear-gradient(135deg, #D7263D, #B71C1C)",
              border: "none",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "600",
              borderRadius: "10px",
              cursor: "pointer",
              letterSpacing: "0.5px",
              boxShadow: "0px 4px 12px rgba(215, 38, 61, 0.4)",
              transition: "all 0.25s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow =
                "0px 8px 18px rgba(215, 38, 61, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0px)";
              e.target.style.boxShadow =
                "0px 4px 12px rgba(215, 38, 61, 0.4)";
            }}
            onClick={() => setShowPopup(true)}
          >
            ACTION
          </button>
        </>
      ) : (
        <>
          <h3 style={{ color: progressDone ? "#28C76F" : "#FF6F20" }}>
            {progressDone ? "Completed!" : "Processing..."}
          </h3>

          <div
            style={{
              width: "100%",
              height: "14px",
              background: "#EEE",
              borderRadius: "8px",
              overflow: "hidden",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                width: `${progressValue}%`,
                height: "100%",
                transition: "0.3s",
                background: progressDone
                  ? "#28C76F"
                  : "linear-gradient(135deg, #FF9F43, #FF6F20)",
              }}
            ></div>
          </div>

          <p
            style={{
              marginTop: "10px",
              fontWeight: "600",
              color: progressDone ? "#28C76F" : "#FF6F20",
            }}
          >
            {progressDone
              ? "Progress Completed ✔"
              : `In Progress... ${progressValue}%`}
          </p>
        </>
      )}
    </div>
  );

  // ---------------- POPUP TEMPLATE ----------------
  const renderPopup = (
    setShowPopup,
    setProgressActive,
    setProgressValue,
    setProgressDone
  ) => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "320px",
          background: "#fff",
          borderRadius: "12px",
          padding: "25px",
          textAlign: "center",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            background: "#28C76F",
            borderRadius: "50%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "40px", color: "#fff" }}>✓</span>
        </div>

        <h3 style={{ marginTop: "15px", color: "#333" }}>Confirm Action?</h3>
        <p style={{ color: "#777", marginBottom: "20px" }}>
          Are you sure you want to continue?
        </p>

        <button
          style={{
            padding: "12px 26px",
            background: "linear-gradient(135deg, #28C76F, #1E9E5A)",
            border: "none",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            letterSpacing: "0.5px",
            boxShadow: "0px 4px 12px rgba(40, 199, 111, 0.4)",
            transition: "all 0.25s ease-in-out",
          }}
          onClick={() => {
            setShowPopup(false);
            setProgressActive(true);
            setProgressValue(0);
            setProgressDone(false);

            let interval = setInterval(() => {
              setProgressValue((prev) => {
                if (prev >= 100) {
                  clearInterval(interval);
                  setProgressDone(true);
                  return 100;
                }
                return prev + 2;
              });
            }, 1000);
          }}
        >
          YES ✔
        </button>
      </div>
    </div>
  );

  return (
    <div>

      {/* ---------- HEADER ---------- */}
      <div
        style={{
          width: "100%",
          height: "70px",
          background: "#ffffff",
          borderBottom: "3px solid #E9E9E9",
          borderRadius: "4px",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src={SOS} width={70} height={70} fit="contain" />
          <span
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#D7263D",
              letterSpacing: "1px",
              marginTop: "11px",
            }}
          >
            SOS
          </span>
        </div>

        <IoNotificationsOutline
          size={35}
          style={{ cursor: "pointer", color: "#333" }}
        />
      </div>

      {/* ---------- TWO CARDS ---------- */}
      <div style={{ display: "flex", gap: "20px" }}>

        {/* FIRST CARD (ORIGINAL) */}
        {renderCard(
          "Alert Card Title",
          "This is an alert information card. You can write any message here.",
          progressActive1,
          progressValue1,
          progressDone1,
          setShowPopup1
        )}

        {/* SECOND CARD — SAME UI BUT MQTT CONTROLLED */}
        {mqttCardVisible &&
          renderCard(
            "Alert Card Title",
            `MQTT Data: ${mqttMessage}`,
            progressActive2,
            progressValue2,
            progressDone2,
            setShowPopup2
          )}
      </div>

      {/* POPUP FOR FIRST CARD */}
      {showPopup1 &&
        renderPopup(
          setShowPopup1,
          setProgressActive1,
          setProgressValue1,
          setProgressDone1
        )}

      {/* POPUP FOR SECOND CARD */}
      {showPopup2 &&
        renderPopup(
          setShowPopup2,
          setProgressActive2,
          setProgressValue2,
          setProgressDone2
        )}

    </div>
  );
};

export default Alertsecondpage;
