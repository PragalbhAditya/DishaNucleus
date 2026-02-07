<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Disha School</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="/assets/js/menu.js" defer></script>
  <style>
    body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
  </style>
</head>
<body class="bg-gray-100">
  <header class="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="/assets/Logo.png" alt="Disha Nucleus Logo" class="w-10 h-10 shadow-lg rounded-lg" />
        <div>
          <h1 class="text-2xl font-bold text-slate-900 leading-none">Disha Nucleus</h1>
          <p class="text-[10px] text-slate-500 tracking-widest font-bold mt-1 uppercase">Senior Secondary School</p>
        </div>
      </div>

      <div class="flex items-center">
        <nav class="hidden md:flex space-x-8 items-center font-medium text-sm">
          <a href="/home" class="text-slate-600 hover:text-blue-900 transition">Home</a>
          <a href="/about" class="text-slate-600 hover:text-blue-900 transition">About Us</a>
          <a href="/academics" class="text-slate-600 hover:text-blue-900 transition">Academics</a>
          <div class="flex gap-3 ml-4">
            <a href="/student" class="px-4 py-2 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition text-sm">Student Portal</a>
            <a href="/admin" class="px-4 py-2 rounded-full bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition text-sm">Admin Login</a>
          </div>
        </nav>

        <button id="menu-button" class="md:hidden ml-3 p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none" aria-label="Toggle menu" aria-expanded="false">
          <svg id="icon-open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg id="icon-close" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <div id="mobile-menu" class="md:hidden hidden bg-white border-t border-slate-100">
      <div class="container mx-auto px-6 py-4 space-y-2">
        <a href="/home" class="block text-slate-700 hover:text-blue-900">Home</a>
        <a href="/about" class="block text-slate-700 hover:text-blue-900">About Us</a>
        <a href="/academics" class="block text-slate-700 hover:text-blue-900">Academics</a>
        <div class="flex gap-3 mt-3">
          <a href="/student" class="px-3 py-2 rounded-full border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 text-sm">Student Portal</a>
          <a href="/admin" class="px-3 py-2 rounded-full bg-blue-900 text-white font-semibold shadow text-sm">Admin Login</a>
        </div>
      </div>
    </div>
  </header>
  <main class="container mx-auto p-4">
