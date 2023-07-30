<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\ProposalController;
use App\Http\Controllers\Api\CollectionController;
use App\Http\Controllers\Api\MembershipController;
use App\Http\Controllers\Api\ConversationController;
use App\Http\Controllers\Api\ItemsMatchingController;
use App\Http\Controllers\Api\UserCollectionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::controller(ConversationController::class)->group(function () {
        Route::get('/conversations', 'getConversations');
        Route::get('/conversation/{with}', 'getConversation');
        Route::post('/send_message/{to}', 'sendMessage');
    });
    Route::controller(CollectionController::class)->group(function () {
        Route::get('/collections', 'getCollections');
        Route::get('/available_collections', 'getAvailableCollections');
        Route::get('/select_collection/{id}', 'setCollectionForUser');
    });
    Route::controller(UserCollectionController::class)->group(function () {
        Route::get('/user_collections', 'getCollectionsForUser');
        Route::get('/user_collection/{id}', 'getCollectionForUser');
        Route::put('/user_collection/{id}', 'updateCollectionForUser');
    });
    Route::controller(ProposalController::class)->group(function () {
        Route::put('/accept_proposal/{id}', 'acceptProposal');
        Route::put('/refuse_proposal/{id}', 'refuseProposal');
        Route::get('/get_proposal/{id}', 'getProposal');
        Route::post('/create_proposal', 'createProposal');
    });
    Route::controller(ItemsMatchingController::class)->group(function () {
        Route::get('/matches/{UserCollectionId}', 'getMatchesForUser');
    });
    Route::controller(UserController::class)->group(function () {
        Route::get('get_users_for_collection/{collectionId}/{term}', 'getUsersForCollection');
        Route::get('get_users/{term}', 'getUsers');
    });
    
});

Route::get('/get_all_countries', [CountryController::class, 'getAll']);
Route::get('/get_all_membership', [MembershipController::class, 'getAll']);

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
