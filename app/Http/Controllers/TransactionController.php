<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Container\Attributes\Auth;

class TransactionController extends Controller
{
    public function index(Request $request)
    {

        $user = $request->user(); // Gets the authenticated user
        $userId = $user ? $user->id : null;

        // Fetch all transactions for the authenticated user
        $transactions = Transaction::where('made_by', $userId)
            ->orderBy('transaction_date', 'desc')
            ->get();

        return Inertia::render('Transaction/Index', [
            'transactions' => $transactions,
        ]);
    }

    public function successPage()
    {
        return Inertia::render('Transaction/Success');
    }
}
