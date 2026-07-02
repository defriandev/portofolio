"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const simulationData = {
  kitrun: {
    title: "KitRun E-Commerce Simulator",
    status: "Active (Local Storage Database)",
    content: "🏃‍♂️ KitRun Terminal:\n- Action: ADD_PRODUCT\n- Product: 'Nike Pegasus 40 Running Shoes'\n- Storage size: 2.4 KB / 5.0 MB used.\n- User Session: Admin (Authenticated)",
    code: `// Save to LocalStorage\nconst saveToLocalStorage = (key, data) => {\n  localStorage.setItem(key, JSON.stringify(data));\n};`
  },
  ai: {
    title: "Image Classification Model Output",
    status: "Model Loaded: InceptionV3",
    content: "🖼️ AI Prediction Log:\n- File received: 'running_shoes.jpg' (244x244px)\n- Processing through CNN layers...\n- Class 1: 'Sport Shoes' — Confidence: 94.7%\n- Class 2: 'Sneakers' — Confidence: 3.2%",
    code: `# Streamlit Predict Function\ndef predict_image(img, model_name):\n    model = load_model(model_name)\n    preds = model.predict(preprocess(img))\n    return decode_predictions(preds)[0]`
  },
  web: {
    title: "iSeries Web View",
    status: "Active (React/HTML)",
    content: "🛒 Product Catalog:\n- iPhone 16 Pro (Price Simulation: Rp 20.000.000)\n- Added to Cart successfully!\n\n🔑 Role: Customer\n[!] Role-based Auth active.",
    code: `const addToCart = (product) => {\n  setCart([...cart, product]);\n  alert("Added to Cart!");\n};`
  },
  mobile: {
    title: "KasirQu Simulator",
    status: "Connected (PocketBase)",
    content: "💵 Cashier Terminal:\n- Transaction ID: TX-889102\n- Items: 3 Products\n- Total: Rp 350.000\n- Status: PAID via Cashless.",
    code: `async function saveTx(data) {\n  return await pb.collection('tx')\n    .create(data);\n}`
  },
  sys: {
    title: "Mental Health Architecture",
    status: "Design validated",
    content: "📊 Database & SRS Schema:\n- User -> 1:M -> JournalEntry\n- Consultation -> M:1 -> Counselor\n- Relational integrity check: PASSED",
    code: "ENTITY User {\n  id: INT AUTO_INCREMENT,\n  email: VARCHAR(255),\n  password_hash: TEXT\n}"
  }
};

type SimKey = keyof typeof simulationData;

export default function Simulator() {
  const [activeTab, setActiveTab] = useState<SimKey>("kitrun");

  return (
    <div className="simulator-card">
      <div className="simulator-title">
        <span>⚡</span> Interactive Demo Simulator
      </div>
      <div className="simulator-subtitle">
        Pilih proyek untuk melihat simulasi visual/kode yang menggambarkan keahlian teknis saya.
      </div>

      <div className="simulator-grid">
        <div className="sim-nav">
          <button
            className={`sim-nav-btn ${activeTab === "kitrun" ? "active" : ""}`}
            onClick={() => setActiveTab("kitrun")}
          >
            KitRun E-Commerce
          </button>
          <button
            className={`sim-nav-btn ${activeTab === "ai" ? "active" : ""}`}
            onClick={() => setActiveTab("ai")}
          >
            AI Image Classify
          </button>
          <button
            className={`sim-nav-btn ${activeTab === "web" ? "active" : ""}`}
            onClick={() => setActiveTab("web")}
          >
            iSeries Web App
          </button>
          <button
            className={`sim-nav-btn ${activeTab === "mobile" ? "active" : ""}`}
            onClick={() => setActiveTab("mobile")}
          >
            KasirQu Mobile
          </button>
          <button
            className={`sim-nav-btn ${activeTab === "sys" ? "active" : ""}`}
            onClick={() => setActiveTab("sys")}
          >
            System Architecture
          </button>
        </div>

        <div className="sim-display">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="sim-screen-header">
                <span className="sim-screen-title">{simulationData[activeTab].title}</span>
                <span className="sim-screen-status">{simulationData[activeTab].status}</span>
              </div>

              <div className="sim-interactive-area">
                <p style={{ whiteSpace: "pre-line", fontSize: "15px", color: "#e2e8f0" }}>
                  {simulationData[activeTab].content}
                </p>
                <div className="sim-code-preview">
                  {simulationData[activeTab].code}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
