function Header() {
  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "20px 40px", 
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #eaeaea",
      boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
    }}>
      <nav style={{ display: "flex", gap: "25px", fontWeight: "600", color: "#555", fontSize: "15px" }}>
        <span style={{ cursor: "pointer", color: "#2563eb" }}>Inicio</span>
        <span style={{ cursor: "pointer" }}>Servicios</span>
        <span style={{ cursor: "pointer" }}>Acerca de</span>
        <span style={{ cursor: "pointer" }}>Contacto</span>
      </nav>
      
      <div style={{ 
        border: "2px solid #2563eb", 
        padding: "6px 14px", 
        borderRadius: "6px",
        fontWeight: "bold", 
        color: "#2563eb",
        backgroundColor: "#eff6ff",
        letterSpacing: "1px"
      }}>
        LOGO
      </div>
    </header>
  );
}
export default Header;