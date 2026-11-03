import Header from "./componentes/header";
import Presentacion from "./componentes/presentacion";
import Footer from "./componentes/footer";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#ffffff" }}>
      <Header />
      <Presentacion />
      <Footer />
    </div>
  );
}
export default App;