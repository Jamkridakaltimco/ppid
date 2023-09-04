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
        Schema::create('posts', function($table){
            $table->id();
            $table->uuid('uuid');
            $table->integer('category_id')->nullable();
            $table->string('title')->nullable();
            $table->string('slug')->nullable();
            $table->string('tags')->nullable();
            $table->text('content');
            $table->string('type')->default('post');
            $table->integer('type_id')->nullable();
            $table->integer('read')->default(0);
            $table->smallInteger('status')->default(1);
            $table->dateTime('published_at')->nullable();
            $table->integer('user_id');
            $table->softDeletes();
            $table->timestamps();
        });

        /*Katgeori*/
        Schema::create('post_categories', function($table){
            $table->id();
            $table->uuid('uuid');
            $table->string('name');
            $table->string('slug');
            $table->smallInteger('status')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });

        /*Fil*/
        Schema::create('files', function($table){
            $table->id();
            $table->uuid('uuid');
            $table->string('name');
            $table->string('type', 50);
            $table->string('path');
            $table->string('disk', 10)->default('local');
            $table->string('fileable_type')->nullable();
            $table->string('fileable_id')->nullable();
            $table->string('field')->nullable();
            $table->text('meta')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        /*Menu*/
        Schema::create('menus', function($table){
            $table->id();
            $table->uuid('uuid');
            $table->string('name', 100);
            $table->string('slug');
            $table->string('link')->nullable();
            $table->string('icon', 30)->nullable();
            $table->integer('parent_id')->nullable();
            $table->string('position')->nullable();
            $table->tinyInteger('order')->default(0);
            $table->tinyInteger('status')->default(1);
            $table->tinyInteger('lock')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });

        /*Configuration*/
        Schema::create('configurations', function($table){
            $table->string('key')->primaryKey();
            $table->text('value');
        });

        /* Gallery */
        Schema::create('galleries', function($table){
            $table->id();
            $table->uuid('uuid');
            $table->string('type', 50)->default('image');
            $table->string('caption');
            $table->string('slug');
            $table->string('link')->nullable();
            $table->string('tags')->nullable();
            $table->text('description')->nullable();
            $table->integer('read')->default(0);
            $table->tinyInteger('featured')->default(0);
            $table->tinyInteger('status')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });

        /* Pollings */
        Schema::create('pollings', function($table){
            $table->id();
            $table->uuid('uuid');
            $table->enum('type', ['question', 'answer'])->default('question');
            $table->tinyInteger('parent')->nullable();
            $table->string('content')->nullable();
            $table->double('score')->default(0);
            $table->tinyInteger('status')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });

        /* Agenda */
        Schema::create('agendas', function($table){
            $table->id();
            $table->uuid('uuid');
            $table->date('date');
            $table->time('time');
            $table->string('caption');
            $table->text('description')->nullable();
            $table->string('location');
            $table->softDeletes();
            $table->timestamps();
        });

        /* Link */
        Schema::create('links', function($table){
            $table->id();
            $table->uuid('uuid');
            $table->string('category')->default('internal');
            $table->string('name')->nullable();
            $table->string('link')->nullable();
            $table->string('icon', 30)->nullable();
            $table->tinyInteger('order')->default(0);
            $table->tinyInteger('status')->default(1);
            $table->tinyInteger('lock')->default(0);
        });

        /* Contacts */
        Schema::create('contacts', function($table){
            $table->id();
            $table->uuid('uuid');
            $table->string('name');
            $table->string('phone');
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->text('message');
            $table->softDeletes();
            $table->timestamps();
        });

        /* Visitor */
        Schema::create('visitors', function($table){
            $table->string('ip', 32)->primaryKey();
            $table->string('country')->nullable();
            $table->integer('total')->unsigned()->default(0);
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
        Schema::dropIfExists('posts');
        Schema::dropIfExists('post_categories');
        Schema::dropIfExists('files');
        Schema::dropIfExists('menus');
        Schema::dropIfExists('configurations');
        Schema::dropIfExists('galleries');
        Schema::dropIfExists('pollings');
        Schema::dropIfExists('agendas');
        Schema::dropIfExists('links');
        Schema::dropIfExists('contacts');
        Schema::dropIfExists('visitors');
    }
};
