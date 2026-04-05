import { useState } from "react";

const TIPS = [5, 10, 15, 20, 25];

export default function TipSelector({ value, onChange }) {
  const [custom, setCustom] = useState("");
  const isCustom = !TIPS.includes(value) && value !== 0;

  const handleCustom = (e) => {
    const val = e.target.value;
    setCustom(val);
    onChange(parseFloat(val) || 0);
  };

  const handlePreset = (tip) => {
    setCustom("");
    onChange(tip);
  };

  return (
    <div className="input-card">
      <label className="input-label">💰 Tip %</label>
      <div className="tip-grid">
        {TIPS.map((tip) => (
          <button
            key={tip}
            className={`tip-btn ${value === tip && !isCustom ? "tip-btn--active" : ""}`}
            onClick={() => handlePreset(tip)}
          >
            {tip}%
          </button>
        ))}
        <input
          className={`tip-custom ${isCustom ? "tip-custom--active" : ""}`}
          type="number"
          placeholder="Custom"
          min="0"
          max="100"
          value={custom}
          onChange={handleCustom}
        />
      </div>
    </div>
  );
}