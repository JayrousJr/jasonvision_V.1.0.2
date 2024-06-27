<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('client_assignments', function (Blueprint $table) {
            $table->id();
            $table->foreignId("client_id")->constrained("clients")->cascadeOnDelete();
            $table->foreignId("service_id")->constrained("services")->cascadeOnDelete();
            $table->boolean("maintenance");
            $table->boolean("addition_service");
            $table->boolean("new_service");
            $table->longText("description");

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_assignments');
    }
};