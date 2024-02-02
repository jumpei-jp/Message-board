import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ThreadDetail: React.FC = () => {
  type Comment = {
      id: number;
      thread_id: number;
      user_id: number;
      body: string;
      created_at: string;
      updated_at: string;
  };
  type Thread = {
      id: number;
      user_id: number;
      title: string;
      body: string;
      created_at: string;
      updated_at: string;
      comments: Comment[];
  };
  const [thread, setThread] = useState<Thread | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [body, setBody] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchThread = async () => {
      const response = await fetch(`http://localhost/api/threads/${id}`);
      const data = await response.json();
      // console.log(data.thread);
      setThread(data.thread);
      setComments(data.comments);
    };

    fetchThread();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`/api/comments/${id}`);
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [id]);

  // コメントの投稿
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch(`http://localhost/api/threads/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        body: body,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setComments([...comments, data]);
      setBody("");
    } else {
      console.log("コメントの投稿に失敗しました");
    }
  };

  return (
    <div>
      {thread && (
        <div>
          <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="shadow mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                  <div className="mx-10 my-10">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm">
                                <div>
                                    <a rel="author" className="text-xl font-bold text-gray-900">投稿者: {thread.user_id}</a>
                                    <p className="text-base text-gray-500 dark:text-gray-400">投稿時間: {thread.created_at}</p>
                                    <p className="text-base text-gray-500 dark:text-gray-400">編集時間: {thread.updated_at}</p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">タイトル: {thread.title}</h1>
                    </header>
                    <p className="lead">内容: {thread.body}</p>
                  </div>
                </article>
            </div>
          </main>

          <h2>コメント</h2>
          <ul>
            {comments.map((comment: Comment) => (
              <li key={comment.id}>
                <p>コメント: {comment.body}</p>
                <p>投稿者: {comment.user_id}</p>
                <p>投稿時間: {comment.created_at}</p>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <label htmlFor="body">コメント</label>
            <input
              type="text"
              id="body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
            <button type="submit">投稿する</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ThreadDetail;