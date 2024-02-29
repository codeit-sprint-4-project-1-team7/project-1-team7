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
import { useState } from "react";

function App() {
  const [isShareContextMenuVisible, setIsShareContextMenuVisible] =
    useState(false);
  const [isEmojiContextMenuVisible, setIsEmojiContextMenuVisible] =
    useState(false);
  const [isEmojiApiContextMenuVisible, setIsEmojiApiContextMenuVisible] =
    useState(false);
  const contextMenuVisibleList = {
    isShareContextMenuVisible: isShareContextMenuVisible,
    isEmojiContextMenuVisible: isEmojiContextMenuVisible,
    isEmojiApiContextMenuVisible: isEmojiApiContextMenuVisible,
  };

  const handleContextMenuVisibleClick = (e) => {
    if (e.target.closest("#addEmojiButton")) {
      setIsEmojiApiContextMenuVisible(!isEmojiApiContextMenuVisible);
      setIsEmojiContextMenuVisible(false);
      setIsShareContextMenuVisible(false);
    }

    if (e.target.closest("#shareButton")) {
      setIsShareContextMenuVisible(!isShareContextMenuVisible);
      setIsEmojiApiContextMenuVisible(false);
      setIsEmojiContextMenuVisible(false);
    }

    if (e.target.closest("#emojiListButton")) {
      setIsEmojiContextMenuVisible(!isEmojiContextMenuVisible);
      setIsEmojiApiContextMenuVisible(false);
      setIsShareContextMenuVisible(false);
    }

    if (
      !e.target.closest("#emojiListButton") &&
      !e.target.closest("#shareButton") &&
      !e.target.closest("#addEmojiButton")
    ) {
      setIsShareContextMenuVisible(false);
      setIsEmojiApiContextMenuVisible(false);
      setIsEmojiContextMenuVisible(false);
    }
  };
  return (
    <BrowserRouter>
      <div onClick={handleContextMenuVisibleClick}>
        <Routes>
          <Route path="/test">
            <Route index element={<TestMain />} />
            <Route
              path="kim"
              element={<Kim contextMenuVisibleList={contextMenuVisibleList} />}
            />
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
                <Route
                  index
                  element={
                    <PostDetail
                      contextMenuVisibleList={contextMenuVisibleList}
                    />
                  }
                />
                <Route
                  path="edit"
                  element={
                    <PostDetailEdit
                      contextMenuVisibleList={contextMenuVisibleList}
                    />
                  }
                />
                <Route path="message" element={<PostMessage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
