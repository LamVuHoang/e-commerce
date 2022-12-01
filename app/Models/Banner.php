<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;

    protected $table = 'banners';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'desktop_size',
        'mobile_size',
        'alt',
        'link',
        'state'
    ];
}
