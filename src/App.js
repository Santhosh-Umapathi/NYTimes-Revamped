import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
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
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
