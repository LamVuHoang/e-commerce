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
        Schema::create('sellers', function (Blueprint $table) {
            $table->bigInteger('id', true, true);
            $table->bigInteger('user_id', false, true);
            $table->string('shop_name');
            $table->string('phone');
            $table->string('mail');
            $table->string('ward_id');
            $table->string('address_detail');
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
