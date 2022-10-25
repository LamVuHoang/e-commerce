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
        Schema::create('seller', function (Blueprint $table) {
            $table->integer('id', true, true);
            $table->integer('user_id', false, true);
            $table->string('shop_name', 200);
            $table->string('phone', 20);
            $table->string('mail', 50);
            $table->integer('ward_id');
            $table->string('address_detail', 500);
            $table->date('create_date');

            // Keys
            $table->foreign('user_id')
                ->references('user_id')->on('users')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seller');
    }
};
