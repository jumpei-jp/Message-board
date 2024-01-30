<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCommentRequest $request)
    {
        try {
            $comment = new Comment([
                'user_id' => $request->input('user_id'),
                'thread_id' => $request->input('thread'),
                'body' => $request->input('body'),
            ]);

            $comment->save();

            return response()->json($comment, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'コメントの投稿に失敗しました。'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        try {
            $comment->body = $request->input('body');
            $comment->save();

            return response()->json($comment);
        } catch (\Exception $e) {
            return response()->json(['message' => 'コメントの更新に失敗しました。'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
