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
            $table->string('username', 20)->unique();
            $table->string('password');
            $table->enum('state', ['Blocked', 'Active'])->default('Active');
            $table->boolean('verified')->default(false);

            //Time stamp
            // $table->timestamp('account_verified_at')->nullable();
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
