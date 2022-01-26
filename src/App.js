import Layout from "./layout";
import { Routes, Route, Link } from "react-router-dom";
//Pages
import { Home, Splash, Blog } from "./pages";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:blog" element={<Blog />} />
      </Routes>
    </Layout>
  );
}

export default App;
