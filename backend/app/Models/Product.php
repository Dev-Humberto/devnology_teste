<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description','quantity', 'category', 'material', 'image', 'price'];

    /*public function getPriceAttribute(){
        return $this->attributes['price'] / 100;
    }

    public function setPriceAttribute($attr){
        return $this->attributes['price'] = $attr * 100;
    }*/

}
