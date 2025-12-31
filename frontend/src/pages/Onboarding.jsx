import { useState } from "react";
import { updateStreak } from "../ai/streakEngine";

export default function Onboarding() {
  const [step, setStep] = useState(1);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {step === 1 && (
          <>
            <h1 style={styles.title}>Welcome to MindGuardian</h1>
            <p style={styles.text}>
              A gentle companion that notices stress early and helps you stay balanced.
            </p>
            <button style={styles.button} onClick={() => setStep(2)}>
              Get Started
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 style={styles.subtitle}>Tell us about you</h2>
            <input
  style={styles.input}
  placeholder="Your Name"
  onChange={(e) => localStorage.setItem("userName", e.target.value)}
/>

            <input style={styles.input} placeholder="Age" />
            <button style={styles.button} onClick={() => setStep(3)}>
              Continue
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 style={styles.subtitle}>How are you feeling today?</h2>
            <div style={styles.options}>
  {["Calm", "Okay", "Tired", "Stressed"].map((mood) => (
    <button
      key={mood}
      onClick={() => {
        localStorage.setItem("userMood", mood);
        updateStreak(mood);
        setStep(4);
      }}
      style={{
        ...styles.moodBtn,
        background: localStorage.getItem("userMood") === mood ? "#5DB075" : "#f7faf9",
        color: localStorage.getItem("userMood") === mood ? "#fff" : "#333",
      }}
    >
      {mood}
    </button>
  ))}
</div>

            <button style={styles.button} onClick={() => {
              const mood = localStorage.getItem("userMood");
              if (mood) updateStreak(mood);
              setStep(4);
            }}>
              Finish
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2 style={styles.subtitle}>You're all set 🌿</h2>
            <p style={styles.text}>
  You’re feeling <b>{localStorage.getItem("userMood")}</b> today.
  MindGuardian will adapt gently to you 🌿
</p>

            <button
  style={styles.button}
  onClick={() => (window.location.href = "/dashboard")}
>
  Go to Dashboard
</button>

          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #f2f6f4, #e7f0ec)",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "20px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },
  title: { fontSize: "26px", marginBottom: "10px" },
  subtitle: { fontSize: "22px", marginBottom: "15px" },
  text: { color: "#555", marginBottom: "20px" },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    background: "#5DB075",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  options: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" },
  moodBtn: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    background: "#f7faf9",
    cursor: "pointer",
  },
};
