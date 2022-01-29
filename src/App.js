import { Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

//Layout
import Layout from "./layout";
//Pages
import { Home, Splash, Blog } from "./pages";
//Translations
import "./i18n";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </RecoilRoot>
  );
}

export default App;
