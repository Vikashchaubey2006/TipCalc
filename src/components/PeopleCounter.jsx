export default function PeopleCounter({ value, onChange }) {
  const dec = () => onChange(Math.max(1, value - 1));
  const inc = () => onChange(value + 1);

  return (
    <div className="input-card">
      <label className="input-label">👥 Number of People</label>
      <div className="counter-wrap">
        <button className="counter-btn" onClick={dec} disabled={value <= 1}>−</button>
        <span className="counter-value">{value}</span>
        <button className="counter-btn" onClick={inc}>+</button>
      </div>
    </div>
  );
}