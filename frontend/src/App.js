import { useEffect, useState } from "react"

function App() {
  const [message, setMessage] = useState("Cargando...")

  useEffect(() => {
    fetch("/api/status")

      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Error conectando al backend"))
  }, [])

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Deleona Platform</h1>
      <p style={styles.subtitle}>Sistema en Producción</p>

      <div style={styles.card}>
        <h2>Estado del Backend:</h2>
        <p>{message}</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "40px"
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    textAlign: "center"
  }
}

export default App
