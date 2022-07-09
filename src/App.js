import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
import Reply from "./pages/reply/reply";

//useParams 이용해서 Reply에서 받고 리플라이에 자료 전달해줘야함.

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="main/reply/:0" element={<Reply />} />
      <Route path="main/reply/:1" element={<Reply />} />
      <Route path="main/reply/:2" element={<Reply />} />
      <Route path="main/reply/:3" element={<Reply />} />
      <Route path="main/reply/:4" element={<Reply />} />
      <Route path="main/reply/:5" element={<Reply />} />
      <Route path="main/reply/:6" element={<Reply />} />
    </Routes>
  );
}

export default App;
