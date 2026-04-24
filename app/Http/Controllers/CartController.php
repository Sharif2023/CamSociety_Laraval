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
            return redirect()->route('login')->with(['error' => 'Please log in to access your cart.']);
        }

        // Eager load the photoSell relationship
        $cartItems = Cart::where('user_id', $user->id)
                         ->where('status', 'pending')
                         ->with('photoSell')
                         ->get();

        return Inertia::render('Cart/Index', [
            'cartItems' => $cartItems,
        ]);
    }




    public function store(Request $request)
    {
        $request->validate([
            'item_type' => 'required|in:photo',
            'cart_item_id' => 'required|integer|exists:photo_sells,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $user = Auth::user();

        if (!$user) {
            return redirect()->route('login')->with(['error' => 'Please log in to add items to your cart.']);
        }

        if (!$user->is_active) {
            return redirect()->route('login')->with(['error' => 'Your account is not active. Please contact support.']);
        }

        $photoSell = PhotoSell::findOrFail($request->integer('cart_item_id'));

        if ((int) $photoSell->created_by === (int) $user->id) {
            return redirect()->back()->with(['error' => 'You cannot add your own photo to the cart.']);
        }

        $cartItem = Cart::where('user_id', $user->id)
            ->where('status', 'pending')
            ->where('item_type', $request->item_type)
            ->where('cart_item_id', $request->cart_item_id)
            ->first();

        if ($cartItem) {
            Cart::where('user_id', $user->id)
                ->where('status', 'pending')
                ->where('item_type', $request->item_type)
                ->where('cart_item_id', $request->cart_item_id)
                ->update([
                    'quantity' => $cartItem->quantity + $request->quantity,
                    'price' => $photoSell->price,
                ]);

            return redirect()->back()->with(['success' => 'Item added to cart!']);
        }

        Cart::updateOrCreate([
            'user_id' => Auth::id(),
            'item_type' => $request->item_type,
            'cart_item_id' => $request->cart_item_id,
            'status' => 'pending',
        ], [
            'quantity' => $request->quantity,
            'price' => $photoSell->price,
        ]);

        return redirect()->back()->with(['success' => 'Item added to cart!']);
    }




    public function destroy($id)
    {
        $user = Auth::user();
        if (!$user) {
            return redirect()->route('login')->with(['error' => 'Please log in to remove items from your cart.']);
        }

        $cartItem = Cart::where('user_id', $user->id)
            ->where('status', 'pending')
            ->findOrFail($id);
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
            return redirect()->route('login')->with(['error' => 'Please log in to update items in your cart.']);
        }

        $cartItem = Cart::where('user_id', $user->id)
            ->where('status', 'pending')
            ->findOrFail($id);
        $cartItem->update([
            'quantity' => $request->quantity,
        ]);

        return redirect()->back()->with(['success' => 'Cart updated!']);
    }
}
