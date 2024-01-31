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
    // <div style={postStyle}>
    //   <h2>タイトル: {thread.title}</h2>
    //   <div>
    //     <p>投稿者id: {thread.user_id}</p>
    //     <p>投稿日: {thread.created_at}</p>
    //     <p>編集日時: {thread.updated_at}</p>
    //   </div>
    // </div>
    <li>
        <div className="px-4 shadow py-5 sm:px-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{thread.title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">投稿者: {thread.user_id}</p>
            </div>
            <div className="mt-4 items-center justify-between">
                <p className="text-sm font-medium text-gray-500">投稿日時: {thread.created_at}</p>
                <p className="text-sm font-medium text-gray-500">変更日時: {thread.updated_at}</p>
            </div>
        </div>
    </li>
  );
};

export default Thread;