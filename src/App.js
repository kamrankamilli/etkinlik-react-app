import "./App.css";
import AllActivities from "./pages/AllActivities";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import { Suspense } from "react";
import ActivityDetail from "./pages/ActivityDetail";
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<AllActivities />}></Route>
          <Route
            path="/etkinlik/:activityId"
            element={<ActivityDetail />}
          ></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
