export default function BillInput({ value, onChange }) {
  return (
    <div className="input-card">
      <label className="input-label">💵 Total Bill</label>
      <div className="bill-wrap">
        <span className="bill-symbol">₹</span>
        <input
          className="bill-input"
          type="number"
          placeholder="0.00"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
