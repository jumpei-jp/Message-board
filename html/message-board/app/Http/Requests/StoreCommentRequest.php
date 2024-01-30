<?php

namespace App\Http\Requests;

class StoreCommentRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'thread' => 'required|exists:threads,id',
            'user_id' => 'required|exists:users,id',
            'body' => 'required|string|max:1000',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge(['thread' => $this->route('thread')]);
    }
}
