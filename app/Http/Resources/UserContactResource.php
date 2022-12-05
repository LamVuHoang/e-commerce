<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserContactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'phone' => $this->phone,
            'email' => $this->email,
            'first_name' => $this->first_name ?? 'First Name',
            'last_name' => $this->last_name ?? 'Last Name',
            'avatar' => $this->avatar,
        ];
    }
}
