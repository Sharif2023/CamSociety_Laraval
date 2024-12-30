<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SignUp-CamSocity</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <style>
        body {
            font-family: "Inter", sans-serif;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center h-screen" style="background-image: url('./assets/login_signup/login_bg.jpg');">
        <div class="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
          <h2 class="text-2xl font-semibold text-center mb-4">Create an Account</h2>
          <form>
            <!-- Full Name -->
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <!-- Email -->
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <!-- Password -->
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Create a password"
              />
            </div>
            <!-- Confirm Password -->
            <div class="mb-6">
              <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your password"
              />
            </div>
            <!-- Sign Up Button -->
            <button
              type="submit"
              class="w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
          <!-- Already have an account -->
          <div class="text-center mt-6">
            <p class="text-sm">
              Already have an account?
              <a href="/login" class="text-blue-500 font-medium hover:underline">Login</a>
            </p>
          </div>
        </div>
      </div>
      
</body>
</html>