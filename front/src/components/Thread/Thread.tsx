import React from "react";

interface ThreadProps {
  thread: {
    user_id: number
    title: string
    created_at: string
    updated_at: string
  };
}

const postStyle = {
  border: "1px solid black",
  margin: "10px",
  padding: "10px"
};

const Thread = ({ thread }: ThreadProps) => {
  return (
    <div style={postStyle}>
      <h2>タイトル: {thread.title}</h2>
      <div>
        <p>投稿者id: {thread.user_id}</p>
        <p>投稿日: {thread.created_at}</p>
        <p>編集日時: {thread.updated_at}</p>
      </div>
    </div>
  );
};

export default Thread;