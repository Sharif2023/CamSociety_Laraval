<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LogIn-CamSocity</title>
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
    <div class="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center h-screen " style="background-image: url('./assets/login_signup/login_bg.jpg');">
        <div class="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
          <h2 class="text-2xl font-semibold text-center mb-4">Login to CamSocity</h2>
          <form>
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
            <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <!-- Login Button -->
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <!-- Divider -->
          <div class="relative mt-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
          <!-- Google Auth Button -->
          <button
            class="mt-4 w-full flex items-center justify-center bg-white border border-gray-300 text-gray-600 py-2 rounded-md shadow-sm hover:bg-gray-100"
            onclick="handleGoogleSignIn()"
          >
            <img src="./assets/login_signup/google_icon.svg" alt="Google Logo" class="h-5 w-5 mr-2">
            Sign in with Google
          </button>
          <!-- Forgot Password -->
          <div class="text-center mt-4">
            <a href="#" class="text-sm text-blue-500 hover:underline">Forgot your password?</a>
          </div>
          <!-- Sign Up -->
          <div class="text-center mt-6">
            <p class="text-sm">
              Don't have an account?
              <a href="/signup" class="text-blue-500 font-medium hover:underline">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
      
      
</body>
</html>