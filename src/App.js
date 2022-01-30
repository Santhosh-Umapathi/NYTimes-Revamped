import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
//Translations
import "./i18n";
//Layout
import Layout from "./layout";
//Components
import { Skeleton } from "./components";
//Pages
import { Home, Splash } from "./pages";
//Page - Lazy Loading
const Blog = lazy(() => import("./pages/Blog"));

const App = () => (
  <RecoilRoot>
    <Layout>
      <Suspense fallback={<Skeleton css="flex w-full h-screen" />}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </Layout>
    <ToastContainer />
  </RecoilRoot>
);

export default App;
