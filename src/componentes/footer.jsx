function Footer() {
  return (
    <footer style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "25px 40px", 
      marginTop: "60px", 
      backgroundColor: "#1e293b",
      color: "#ffffff"
    }}>
      <p style={{ margin: 0, fontWeight: "500", fontSize: "14px" }}>
        Sitio web completado y diseñado por <span style={{ color: "#60a5fa", fontWeight: "bold" }}>Simón Berrio</span>
      </p>
      
      <div style={{ display: "flex", gap: "20px", fontSize: "13px", color: "#94a3b8" }}>
        <span style={{ cursor: "pointer" }}>Privacidad</span>
        <span style={{ cursor: "pointer" }}>Términos</span>
        <span style={{ cursor: "pointer" }}>Soporte</span>
      </div>
    </footer>
  );
}
export default Footer;