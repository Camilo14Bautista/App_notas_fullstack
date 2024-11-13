import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import FooterPage from "./pages/FooterPage";

import TaskPages from "./pages/TaskPages";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <main className="w-screen h-screen flex justify-between items-center flex-col dark:bg-gray-600/50">
      <div className="absolute inset-0 -z-10 h-screen w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <AuthProvider>
        <TaskProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TaskPages />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
      <FooterPage />
    </main>
  );
}

export default App;
