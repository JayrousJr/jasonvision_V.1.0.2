<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get("/", [PagesController::class,'home'])->name('home');
Route::get("contact", [PagesController::class,'contact'])->name('contact');
Route::get("about", [PagesController::class,'about'])->name('about');
Route::get("blog", [PagesController::class,'blog'])->name('blog');
Route::post("vVHrL33bRVTV3uFDf87HrdXDDV2BJan4SFjFYvYe/apply-for-job", [MessageController::class,'apply'])->name('apply');
Route::get("cudqeDyfIYIBz53PQg4De6rCEN2bg7GzyHuV5Z93/job-application/vVHrL33bRVTV3uFDf87HrdXDDV2BJan4SFjFYvYe", [PagesController::class,'job'])->name('job');
Route::post("message", [MessageController::class,'message'])->name('message');
Route::get("blog-post/{slug}", [PagesController::class,'post'])->name('post');
Route::get("service/{slug}", [PagesController::class, 'service'])->name('service');
Route::middleware(['auth','verified'])->group(function(){
    Route::post("blog-post/{slug}", [MessageController::class, 'posting'])->name('posting');
});
Route::get('/dashboard', function () {
    return redirect(route("home"));
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';