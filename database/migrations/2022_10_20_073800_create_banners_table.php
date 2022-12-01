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
            $table->integer('id', true, true);
            // $table->integer('created_by', false, true);
            // $table->date('start_time');
            // $table->date('end_time');
            // $table->string('title', 100);
            // $table->text('describe');
            $table->string('desktop_image');
            $table->string('mobile_image');
            $table->string('alt', 100);
            $table->string('link')->nullable();
            $table->boolean('state')->default(true);

            // Keys
            // $table->foreign('created_by')
            //     ->references('user_id')->on('users');
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
