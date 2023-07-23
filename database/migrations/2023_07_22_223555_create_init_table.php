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
        Schema::create('room', function (Blueprint $table) {
            $table->id();
            $table->uuid();
            $table->integer('parent_id');
            $table->string('name');
            $table->integer('queue')->default(0);
            $table->tinyInteger('status')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('queue', function (Blueprint $table) {
            $table->id();
            $table->uuid();
            $table->date('date');
            $table->string('prefix', 10);
            $table->integer('number');
            $table->integer('room_id');
            $table->integer('guest_id');
            $table->string('number_police')->nullable();
            $table->string('number_machine')->nullable();
            $table->string('number_part')->nullable();
            $table->tinyInteger('status')->default(0);
            $table->tinyInteger('checking')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('guest', function (Blueprint $table) {
            $table->id();
            $table->uuid();
            $table->string('nik');
            $table->string('fullname');
            $table->string('phone');
            $table->tinyInteger('status')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('guest_vehicle', function (Blueprint $table) {
            $table->id();
            $table->uuid();
            $table->integer('guest_id');
            $table->string('number_police')->nullable();
            $table->string('number_machine')->nullable();
            $table->string('number_part')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->softDeletes();
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
        Schema::dropIfExists('room');
        Schema::dropIfExists('queue');
        Schema::dropIfExists('guest');
        Schema::dropIfExists('guest_vehicle');
    }
};
