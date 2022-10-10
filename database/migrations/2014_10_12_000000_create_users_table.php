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
            $table->bigInteger('user_id', true, true);
            $table->string('password');
            $table->enum('type', ['Blocked', 'User', 'Seller', 'Admin']);
            $table->string('first_name');
            $table->string('last_name');
            $table->string('username')->unique();
            $table->date('date_of_birth');
            $table->string('phone')->unique();
            $table->string('mail')->unique();
            $table->string('ward_id');
            $table->string('address_detail');

            //Time stamp
            $table->timestamp('email_verified_at')->nullable();
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
