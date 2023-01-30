<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class File extends Model
{
    use HasFactory;

    protected $fillable = ["name","text","folder_id","subfolder_id"];

    // Relationship
    public function subfolders() {
        return $this->BelongsTo([Subfolder::class]);
    }
}
