<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Http\Controllers\ChatBotController;


Route::get('/ai', function () {
    $poem = Http::withToken(config('services.openai.secret'))
    ->post('https://api.openai.com/v1/chat/completions', 
    [
        "model" => "gpt-3.5-turbo",
        "messages" => [
            [
                "role" => "system",
                "content" => "You are someone who is professional with poems"
            ],
            [
                "role" => "user",
                "content" => "compose a poem"
            ]
        ]
    ])->json();

    dd($poem);
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/chat', function () { 
        return view('Chat');
    });
    Route::post('send', [ChatBotController::class, 'sendChat']);
});

require __DIR__.'/auth.php';
