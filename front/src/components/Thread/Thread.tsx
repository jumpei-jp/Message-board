import React from "react";
import { Link } from "react-router-dom";

interface ThreadProps {
  thread: {
    id: number
    user_id: number
    title: string
    created_at: string
    updated_at: string
  };
}

const Thread = ({ thread }: ThreadProps) => {
  return (
    <li>
        <div className="px-4 shadow py-5 sm:px-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900"><Link to={`/threads/${thread.id}`}>{thread.title}</Link></h3>
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