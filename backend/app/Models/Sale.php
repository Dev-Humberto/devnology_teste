<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'user_id','quantity'];

   /* public function products(){
        return $this->hasMany(Product::class); //store_id
    }*/
}
