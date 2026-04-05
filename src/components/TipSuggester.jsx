const RATINGS = [
  { label: "Poor",      emoji: "😞", tip: 5,  desc: "Service was below expectations"    },
  { label: "Average",   emoji: "😐", tip: 10, desc: "Service was okay, nothing special"  },
  { label: "Good",      emoji: "🙂", tip: 15, desc: "Service was solid and friendly"     },
  { label: "Great",     emoji: "😊", tip: 20, desc: "Service was attentive and pleasant" },
  { label: "Excellent", emoji: "🤩", tip: 25, desc: "Service was outstanding!"           },
];

export default function TipSuggester({ onSelect, activeTip }) {
  return (
    <div className="input-card">
      <label className="input-label">💡 Tip Suggester — Rate your service</label>
      <div className="rating-grid">
        {RATINGS.map((r) => (
          <button
            key={r.label}
            className={`rating-btn ${activeTip === r.tip ? "rating-btn--active" : ""}`}
            onClick={() => onSelect(r.tip)}
            title={r.desc}
          >
            <span className="rating-emoji">{r.emoji}</span>
            <span className="rating-label">{r.label}</span>
            <span className="rating-tip">{r.tip}%</span>
          </button>
        ))}
      </div>
      {RATINGS.find((r) => r.tip === activeTip) && (
        <p className="rating-desc">
          {RATINGS.find((r) => r.tip === activeTip).desc}
        </p>
      )}
    </div>
  );
}