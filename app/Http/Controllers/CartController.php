<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\PhotoSell;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        if (!$user) {
            return redirect()->route('login')->with('error', 'Please log in to access your cart.');
        }

        // Eager load the photoSell relationship
        $cartItems = Cart::where('user_id', $user->id)
                         ->with('photoSell') // Load associated photoSell data
                         ->get();

        return Inertia::render('Cart/Index', [
            'cartItems' => $cartItems,
        ]);
    }




    public function store(Request $request)
    {
        $request->validate([
            'item_type' => 'required|in:photo,product',
            'cart_item_id' => 'required|integer',
            'quantity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
        ]);

        $user = Auth::user();

        // check if user is_active or not
        if (!$user->is_active) {
            return redirect()->route('login')->with('error', 'Your account is not active. Please contact support.');
        }

        if (!$user) {
            return redirect()->route('login')->with('error', 'Please log in to add items to your cart.');
        }

        // Check if the item is already in the cart
        $cartItem = Cart::where('user_id', $user->id)
            ->where('item_type', $request->item_type)
            ->where('cart_item_id', $request->cart_item_id)
            ->first();

        if ($cartItem) {
            Cart::where('user_id', $user->id)
                ->where('item_type', $request->item_type)
                ->where('cart_item_id', $request->cart_item_id)
                ->update([
                    'quantity' => $cartItem->quantity + $request->quantity,
                    'price' => $request->price,
                ]);

                // stay in same page
            return redirect()->back()->with('success', 'Item added to cart!');
        }
        
        // Add or update the cart item
        Cart::updateOrCreate([
            'user_id' => Auth::id(),
            'item_type' => $request->item_type,
            'cart_item_id' => $request->cart_item_id,
        ], [
            'quantity' => $request->quantity,
            'price' => $request->price,
        ]);

        return redirect()->back()->with('success', 'Item added to cart!');
    }




    public function destroy($id)
    {
        $user = Auth::user();
        if (!$user) {
            return redirect()->route('login')->with('error', 'Please log in to remove items from your cart.');
        }

        $cartItem = Cart::where('user_id', $user->id)->findOrFail($id);
        $cartItem->delete();

        return redirect()->back()->with('success', 'Item removed from cart!');
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        $user = Auth::user();
        if (!$user) {
            return redirect()->route('login')->with('error', 'Please log in to update items in your cart.');
        }

        $cartItem = Cart::where('user_id', $user->id)->findOrFail($id);
        $cartItem->update([
            'quantity' => $request->quantity,
        ]);

        return redirect()->back()->with('success', 'Cart updated!');
    }
}
