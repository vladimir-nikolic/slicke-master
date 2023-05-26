<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MembershipPublicResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $formated = [];
        foreach($this as $collection){
            foreach($collection as $membership){
                $formated[] = new MembershipOnePublicResource($membership);
            }
        }
        return $formated;
    }
}
