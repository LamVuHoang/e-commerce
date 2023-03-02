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
        Schema::create('values', function (Blueprint $table) {
            $table->integer('id', true, true);
            $table->integer('property_id', false, true);
            $table->integer('product_id', false, true);
            $table->string('name', 50);

            // Keys
            $table->foreign('product_id')
                ->references('id')->on('products');
            $table->foreign('property_id')
                ->references('id')->on('properties');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('values');
    }
};
