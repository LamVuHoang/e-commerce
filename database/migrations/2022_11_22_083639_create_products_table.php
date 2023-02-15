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
        Schema::create('products', function (Blueprint $table) {
            $table->integer('id', true, true);
            $table->string('product_name', 50);
            $table->integer('seller_id', false, true);
            // $table->string('image', 255);
            // $table->integer('category_id', false, true);

            // Keys
            $table->foreign('seller_id')
                ->references('id')->on('sellers');

            // Timestamp
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
        Schema::dropIfExists('products');
    }
};
