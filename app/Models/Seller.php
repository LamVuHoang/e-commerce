<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;
    protected $table = 'seller';
    public $timestamps = false;

    // public function user()
    // {
    //     return $this->hasOne(User::class, 'user_id', 'user_id');
    // }
}
