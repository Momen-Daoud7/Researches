<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\File;

class Folder extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    
    // Relationships
    public function files()
    {
        return $this->hasMany(File::class);
    }
}

