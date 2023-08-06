import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import AuthRoute from "./components/AuthRoute";
import PublicRoute from "./components/PublicRoute";
import MainLayout from "./components/layout/MainLayout";

const App = () => (
  <MainLayout>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<AuthRoute />}>
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  </MainLayout>
);

export default App;
