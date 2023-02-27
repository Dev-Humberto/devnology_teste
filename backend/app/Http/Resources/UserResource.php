<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    
    public function toArray(Request $request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'username' => $this->username,
            'phonenumber' => $this->phonenumber,
            'address' => $this->address,
            'type' => $this->type,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];

    }
}
