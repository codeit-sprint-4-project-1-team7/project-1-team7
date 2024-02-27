import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Kim } from "./component/test/Kim";
import { Yang } from "./component/test/Yang";
import { Yun } from "./component/test/Yun";
import { Choi } from "./component/test/Choi";
import { Hong } from "./component/test/Hong";
import TestMain from "./component/testMain/TestMain";
import Main from "./component/pages/Main";
import List from "./component/pages/List";
import Post from "./component/pages/Post";
import PostDetail from "./component/pages/PostDetail";
import PostDetailEdit from "./component/pages/PostDetailEdit";
import PostMessage from "./component/pages/PostMessage";
import Layout from "./component/pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test">
          <Route index element={<TestMain />} />
          <Route path="kim" element={<Kim />} />
          <Route path="yang" element={<Yang />} />
          <Route path="yun" element={<Yun />} />
          <Route path="choi" element={<Choi />} />
          <Route path="hong" element={<Hong />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="list" element={<List />} />
          <Route path="post">
            <Route index element={<Post />} />
            <Route path=":postId">
              <Route index element={<PostDetail />} />
              <Route path="edit" element={<PostDetailEdit />} />
              <Route path="message" element={<PostMessage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
