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
        Schema::create('user_contacts', function (Blueprint $table) {
            $table->integer('id', true, true);
            $table->integer('user_id', false, true);
            $table->string('phone', 20)->unique();
            $table->string('email', 50)->unique();
            $table->string('first_name', 20);
            $table->string('last_name', 50);
            $table->enum('gender', ['Male', 'Female']);
            $table->string('avatar');
            $table->string('address_describe', 500);
            $table->date('date_of_birth');
            $table->integer('ward_id', false, true);

            // Timestamps
            $table->timestamps();

            // Keys
            $table->foreign('user_id')
                ->references('user_id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_contacts');
    }
};
