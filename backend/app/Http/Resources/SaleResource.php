<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SaleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'product_id' => $this->produto_id,
            'user_id' => $this->user_id,
            'quantity' => $this->quantity,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
