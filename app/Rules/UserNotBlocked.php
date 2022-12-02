<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;

class UserNotBlocked implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $usernameExists = User::where('username', $value)->exists();

        if ($usernameExists) {
            return User::where('username', $value)
                ->where('state', '!=', 'Blocked')
                ->exists();
        }
        
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'This Username has been blocked';
    }
}
