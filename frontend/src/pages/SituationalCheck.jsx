import { useNavigate } from "react-router-dom";

export default function SituationalCheck() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 30 }}>
      <h2>Pick what feels closest today</h2>

      <button>I feel rushed</button><br /><br />
      <button>I feel mentally tired</button><br /><br />
      <button>I feel mostly okay</button><br /><br />

      <br />
      <button onClick={() => navigate("/dashboard")}>
        Continue
      </button>
    </div>
  );
}
