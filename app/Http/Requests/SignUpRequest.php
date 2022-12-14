<?php

namespace App\Http\Requests;

use App\Http\Traits\ApiReponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\ValidationException;

class SignUpRequest extends FormRequest
{
    use ApiReponse;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'username' => ['required', 'unique:users,username', 'min:3', 'max:20'],
            'password' => ['required', 'confirmed', 'min:5', 'max:20'],
            'password_confirmation' => ['required', 'min:5', 'max:20']
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'username' => 'Username',
            'password' => 'Password',
            'password_confirmation' => 'Password confirmation'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'required' => ':attribute is required',
            'unique' => 'This :attribute is already taken',
            'max' => ':attribute not exceed :max characters',
            'min' => ':attribute not under :min characters',
            'confirmed' => 'Password and password confirmation must be matched'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();
        throw new HttpResponseException($this->failureResponse($errors, 400));
    }
}
