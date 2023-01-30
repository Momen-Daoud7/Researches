<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subfolders', function (Blueprint $table) {
            $table->increments("id");
            $table->string("name");
            $table->unsignedBigInteger("folder_id")->unsigned()->nullable();
            $table->foreign('folder_id')->references("id")->on("folders")->onDelete('cascade');
            $table->integer("parent_id")->unsigned()->nullable();
            $table->foreign('parent_id')->references("id")->on("subfolders")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subfolders');
    }
};
