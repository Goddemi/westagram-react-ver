import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
import Reply from "./pages/reply/reply";

//아래 라우터 자체도 Data + Map 을 통해서 동적으로 생성 될 수 있도록.
//data값에 UseState로 줘야 하는 이유.

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
