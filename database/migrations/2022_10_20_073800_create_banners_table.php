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
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('desktop_image');
            $table->string('mobile_image');
            $table->string('alt', 500)->nullable();
            $table->string('link')->nullable();
            $table->boolean('state', [true, false])->default(true);
            $table->integer('created_by', false, true)->nullable()->default(null);

            // Keys
            $table->foreign('created_by')
                ->references('user_id')->on('users')->onUpdate('cascade');

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
        Schema::dropIfExists('banners');
    }
};
