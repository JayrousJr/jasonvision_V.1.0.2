<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JobApplicationRequest extends FormRequest
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
            'fname' => "required|string|min:3|max:255",
            'sname' => "required|string|min:3|max:255",
            'email' => "required|email|min:3|max:255|unique:job_applications,email",
            'phone' => "required|string|min:10|max:21",
            'attachment' => "required|file|mimes:pdf"
            // |mimes:pdf
        ];
    }
    public function attributes()
    {
        return [
            "sname" => "Second Name",
            "fname" => "First Name",
            "phone" => "Phone Name",
            "email" => "Email Address",
            "attachment" => "Cv attachment",
        ];
    }
}