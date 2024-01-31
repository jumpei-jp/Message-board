import React, { useState, useEffect } from "react";
import Thread from "../../components/Thread/Thread";
import { json } from "stream/consumers";

type Thread = {
  id: number;
  user_id: number;
  title: string;
  created_at: string;
  updated_at: string;
};

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // 投稿一覧を取得する
    fetch("http://localhost/api/threads")
      .then((response) => response.json())
      .then((data) => setThreads(data))
      .then(json => console.log(json));
  }, []);

  return (
    <div>
      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">投稿一覧</h1>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-xl mx-auto mt-16">
        {threads.map((thread: Thread) => (
          <Thread key={thread.id} thread={thread} />
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;