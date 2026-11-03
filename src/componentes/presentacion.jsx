function Presentacion() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px", display: "flex", flexDirection: "column", gap: "50px", color: "#333" }}>
      
      {/* Sección superior: Bienvenida / Categorías */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "30px", borderBottom: "1px solid #eaeaea", paddingBottom: "25px" }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: "0 0 8px 0", color: "#1e293b" }}>Innovación</h3>
          <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>Explorando nuevas tecnologías para el desarrollo web moderno.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: "0 0 8px 0", color: "#1e293b" }}>Diseño UI/UX</h3>
          <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>Estructuras limpias pensadas en la mejor experiencia de usuario.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: "0 0 8px 0", color: "#1e293b" }}>Rendimiento</h3>
          <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>Aplicaciones optimizadas, rápidas y totalmente adaptables.</p>
        </div>
      </div>

      {/* Sección central: Texto descriptivo, imagen central destacada y detalles */}
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "28px", marginBottom: "15px", color: "#0f172a" }}>Transformando ideas en código</h2>
          <p style={{ lineHeight: "1.6", color: "#475569" }}>
            Cada proyecto digital inicia con una visión clara. Implementar una arquitectura limpia y componentes modulares permite escalar aplicaciones de manera eficiente y ordenada.
          </p>
        </div>
        
        {/* Imagen principal real */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", width: "320px" }}>
          <div style={{ width: "320px", height: "200px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" 
              alt="Desarrollo Web" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span style={{ fontSize: "13px", color: "#64748b", fontStyle: "italic" }}>Espacio de trabajo moderno</span>
        </div>

        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#0f172a" }}>Compromiso con la calidad</h3>
          <p style={{ lineHeight: "1.6", color: "#475569", marginBottom: "10px" }}>
            Siguiendo buenas prácticas de desarrollo front-end con React, garantizamos interfaces dinámicas y un mantenimiento del código sumamente sencillo.
          </p>
          <p style={{ lineHeight: "1.6", color: "#475569" }}>
            La estructuración por carpetas facilita el trabajo colaborativo en equipo.
          </p>
        </div>
      </div>

      {/* Grid inferior de 3 tarjetas con imágenes reales */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "25px", marginTop: "20px" }}>
        {[
          { title: "Desarrollo Ágil", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80", desc: "Metodologías eficientes para entregas puntuales y organizadas." },
          { title: "Soporte Continuo", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80", desc: "Monitoreo constante y actualizaciones enfocadas en estabilidad." },
          { title: "Diseño Responsivo", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", desc: "Adaptabilidad perfecta en dispositivos móviles, tablets y escritorios." }
        ].map((card, index) => (
          <div key={index} style={{ 
            flex: 1, 
            backgroundColor: "#f8fafc", 
            borderRadius: "10px", 
            overflow: "hidden", 
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 6px rgba(0,0,0,0.02)"
          }}>
            <div style={{ height: "140px", overflow: "hidden" }}>
              <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "18px" }}>
              <h4 style={{ margin: "0 0 8px 0", color: "#1e293b", fontSize: "16px" }}>{card.title}</h4>
              <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
export default Presentacion;