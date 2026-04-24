<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        $userId = Auth::id();

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
