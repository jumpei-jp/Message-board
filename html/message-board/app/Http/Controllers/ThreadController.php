<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreThreadRequest;
use App\Http\Requests\UpdateThreadRequest;
use App\Models\Thread;
use Exception;

class ThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $threads = Thread::all();
        return response()->json($threads);
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
    public function store(StoreThreadRequest $request)
    {
        try {
            $thread = new Thread();
            $thread->user_id = $request->input('user_id');
            $thread->title = $request->input('title');
            $thread->body = $request->input('body');
            $thread->save();

            return response()->json($thread);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Thread $thread)
    {
        return response()->json($thread);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Thread $thread)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateThreadRequest $request, Thread $thread)
    {
        try {
            $thread->fill($request->all())->save();

            return response()->json($thread);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Thread $thread)
    {
        try {
            $thread->delete();

            return response()->json($thread);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
        //
    }
}
