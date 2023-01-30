<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\File;

class Subfolder extends Model
{
    use HasFactory;

    protected $fillable = ['name',"folder_id","parent_id"];

    // relationships
    public function files() {
        return $this->hasMany(Filee::class);
    }
}
