import { useState } from "react";
import BillInput     from "./components/BillInput";
import TipSelector   from "./components/TipSelector";
import TipSuggester  from "./components/TipSuggester";
import PeopleCounter from "./components/PeopleCounter";
import ResultCard    from "./components/ResultCard";
import ThemeToggle   from "./components/ThemeToggle";

export default function App() {
  const [bill,   setBill]   = useState("");
  const [tip,    setTip]    = useState(15);
  const [people, setPeople] = useState(1);

  const handleReset = () => {
    setBill("");
    setTip(15);
    setPeople(1);
  };

  return (
    <div className="app">
      <div className="bg-blob blob1" />
      <div className="bg-blob blob2" />

      <div className="container">
        <header className="app-header">
          <ThemeToggle />
          <h1 className="app-title">TipCalc</h1>
          <p className="app-subtitle">Split smarter, tip better</p>
        </header>

        <div className="calc-grid">
          <div className="inputs-col">
            <BillInput value={bill} onChange={setBill} />
            <TipSuggester onSelect={setTip} activeTip={tip} />
            <TipSelector value={tip} onChange={setTip} />
            <PeopleCounter value={people} onChange={setPeople} />
          </div>

          <div className="result-col">
            <ResultCard
              bill={bill}
              tip={tip}
              people={people}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}