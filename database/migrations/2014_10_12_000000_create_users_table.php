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
        Schema::create('users', function (Blueprint $table) {
            $table->integer('user_id', true, true);
            $table->string('password');
            $table->enum('type', ['Blocked', 'User', 'Seller', 'Admin'])->default('User');
            $table->string('first_name', 20)->nullable();
            $table->string('last_name', 50)->nullable();
            $table->string('username', 20)->unique();
            $table->date('date_of_birth')->nullable();
            $table->string('phone', 20)->unique()->nullable();
            $table->string('mail', 50)->unique()->nullable();
            $table->integer('ward_id', false, true)->nullable();
            $table->string('address_detail', 500)->nullable();
            $table->string('avatar')->nullable();

            //Time stamp
            $table->timestamp('account_verified_at')->nullable();
            $table->timestamps();

            $table->rememberToken();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
