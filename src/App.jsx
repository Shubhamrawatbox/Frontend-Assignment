import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "./context/Context";
import Loader from "./components/Loader/Loader";

const MySpaceLazyPage = React.lazy(() => import("./pages/MySpace/MySpacePage"));
const HomeLazyPage = React.lazy(() => import("./pages/Home/HomePage"));
const EventLazyPage = React.lazy(() => import("./pages/Events/EventsPage"));
const VideoLazyPage = React.lazy(() => import("./pages/Videos/VideosPage"));
const LiveLazyPage = React.lazy(() => import("./pages/Live/LivePage"));
const RegisterLazyPage = React.lazy(() =>
  import("./pages/Regsiter/RegisterPage")
);

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route
                path="/myspace"
                element={
                  <Layout pageTitle="My Space">
                    <ErrorBoundary>
                      <MySpaceLazyPage />
                    </ErrorBoundary>
                  </Layout>
                }
              />
              <Route
                path="/"
                element={
                  <Layout>
                    <ErrorBoundary>
                      <HomeLazyPage />
                    </ErrorBoundary>
                  </Layout>
                }
              />
              <Route
                path="/events"
                element={
                  <Layout pageTitle="Events">
                    <ErrorBoundary>
                      <EventLazyPage />
                    </ErrorBoundary>
                  </Layout>
                }
              />
              <Route
                path="/videos"
                element={
                  <Layout pageTitle="Videos">
                    <ErrorBoundary>
                      <VideoLazyPage />
                    </ErrorBoundary>
                  </Layout>
                }
              />
              <Route
                path="/live"
                element={
                  <Layout pageTitle="Live">
                    <ErrorBoundary>
                      <LiveLazyPage />
                    </ErrorBoundary>
                  </Layout>
                }
              />
              <Route
                path="/register"
                element={
                  <Layout pageTitle="Register">
                    <ErrorBoundary>
                      <RegisterLazyPage />
                    </ErrorBoundary>
                  </Layout>
                }
              />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
