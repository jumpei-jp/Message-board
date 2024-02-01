import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ThreadCreate: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost/api/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        title: title,
        body: body,
      }),
    });

    if (response.ok) {
      navigate("/threads");
    } else {
      console.log("投稿に失敗しました");
    }
  };

  return (
    <div>
      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">投稿作成</h1>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">タイトル</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="タイトルを入力してください..."
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900">内容</label>
            <textarea
              id="body"
              rows={10}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="本文を入力してください..."
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">投稿する</button>
        </form>
    </div>
  );
};

export default ThreadCreate;