import React, { useState, useEffect } from "react";
import Thread from "../../components/Thread/Thread";
import { json } from "stream/consumers";
import { useNavigate } from "react-router-dom";

type Thread = {
  id: number;
  user_id: number;
  title: string;
  created_at: string;
  updated_at: string;
};

const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/threads/create");
  }

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
      <div className="flex justify-center mt-16">
        <button type="button" onClick={redirect} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">投稿する</button>
      </div>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-xl mx-auto mt-5">
        {threads.map((thread: Thread) => (
          <Thread key={thread.id} thread={thread} />
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;