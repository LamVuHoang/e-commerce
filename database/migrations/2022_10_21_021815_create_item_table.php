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
        Schema::create('item', function (Blueprint $table) {
            $table->integer('item_id', true, true);
            $table->integer('shop_id', false, true);
            $table->string('name', 50);
            $table->integer('price');
            $table->string('thumbnail');
            $table->text('describe');
            $table->string('category');
            $table->enum('state', [0, 1]);

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
        Schema::dropIfExists('item');
    }
};
