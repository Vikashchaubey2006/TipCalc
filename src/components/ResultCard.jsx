export default function ResultCard({ bill, tip, people, onReset }) {
  const billNum   = parseFloat(bill) || 0;
  const tipAmount = (billNum * tip) / 100;
  const total     = billNum + tipAmount;
  const tipPer    = people > 0 ? tipAmount / people : 0;
  const totalPer  = people > 0 ? total / people     : 0;

  const fmt = (n) =>
    n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const isEmpty = billNum === 0;

  return (
    <div className="result-card">
      <div className="result-header">
        <h2 className="result-title">Summary</h2>
        {!isEmpty && (
          <button className="reset-btn" onClick={onReset}>🔄 Reset</button>
        )}
      </div>

      <div className="result-grid">
        <ResultRow label="Bill Amount"     value={fmt(billNum)}   muted  />
        <ResultRow label={`Tip (${tip}%)`} value={fmt(tipAmount)} accent />
        <div className="result-divider" />
        <ResultRow label="Total Bill" value={fmt(total)} bold />
      </div>

      {people > 1 && (
        <>
          <div className="result-split-label">Split equally between {people} people</div>
          <div className="result-grid">
            <ResultRow label="Tip / Person"   value={fmt(tipPer)}   accent />
            <ResultRow label="Total / Person" value={fmt(totalPer)} bold   />
          </div>
        </>
      )}

      <div className="result-highlight">
        <p className="highlight-label">
          {people > 1 ? "Each Person Pays" : "You Pay"}
        </p>
        <p className="highlight-amount">
          ₹{fmt(people > 1 ? totalPer : total)}
        </p>
      </div>
    </div>
  );
}

function ResultRow({ label, value, muted, accent, bold }) {
  return (
    <div className="result-row">
      <span className={`result-label ${muted ? "result-label--muted" : ""}`}>{label}</span>
      <span className={`result-value ${accent ? "result-value--accent" : ""} ${bold ? "result-value--bold" : ""}`}>
        ₹{value}
      </span>
    </div>
  );
}