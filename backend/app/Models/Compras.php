<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compras extends Model
{
    use HasFactory;
    
    /* 
        produto_id -> seria a chave estrangeira da table produtos para obter as informações do produto
        user_id -> chave estrangeira da table user para obter os dados do cliente 
    
    */ 
    protected $fillable = ['produto_id', 'user_id','quantidade', 'preco_unitario'];

    public function getPriceAttribute(){
        return $this->attributes['preco_unitario'] / 100;
    }

    public function setPriceAttribute($attr){
        return $this->attributes['preco_unitario'] = $attr * 100;
    }

    /*
        public function produto(){
            return this->belongsTo(Produto::class);
        }

        public function user(){
            return this->belongsTo(User::class);
        }
    */

}
