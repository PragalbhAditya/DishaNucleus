<div class="flex flex-col md:flex-row gap-6">
	<!-- Sidebar simplified -->
	<div class="w-full md:w-64 bg-blue-900 text-white p-4 rounded">
		<h3 class="text-xl font-bold mb-4">Admin Panel</h3>
		<ul class="space-y-2 text-sm">
			<li><a href="#overview" class="block p-2 bg-yellow-500 text-blue-900 rounded">Overview</a></li>
			<li><a href="#classes" class="block p-2 hover:bg-blue-800 rounded">Live Classes</a></li>
			<li><a href="#students" class="block p-2 hover:bg-blue-800 rounded">Students</a></li>
			<li><a href="#notes" class="block p-2 hover:bg-blue-800 rounded">Upload Notes</a></li>
		</ul>
	</div>

	<!-- Main area -->
	<div class="flex-1">
		<h2 id="overview" class="text-2xl font-bold mb-4">Dashboard Overview</h2>
		<div class="grid md:grid-cols-3 gap-4 mb-6">
			<div class="bg-blue-500 text-white p-4 rounded"> <div class="text-sm">Total Students</div><div class="text-2xl font-bold">1,240</div></div>
			<div class="bg-green-500 text-white p-4 rounded"> <div class="text-sm">Active Classes</div><div class="text-2xl font-bold">3</div></div>
			<div class="bg-purple-500 text-white p-4 rounded"> <div class="text-sm">Notes Uploaded</div><div class="text-2xl font-bold">450</div></div>
		</div>

		<section id="classes" class="bg-white p-4 rounded shadow mb-6">
			<h3 class="font-semibold mb-2">Schedule Live Class</h3>
			<form method="post" action="/admin/schedule.php" class="grid md:grid-cols-2 gap-2">
				<input name="topic" placeholder="Topic" class="border p-2 rounded" />
				<input name="teacher" placeholder="Teacher" class="border p-2 rounded" />
				<input name="time" placeholder="Time" class="border p-2 rounded" />
				<input name="meetLink" placeholder="Meet Link" class="border p-2 rounded" />
				<button type="submit" class="col-span-2 bg-blue-900 text-white px-4 py-2 rounded">Schedule</button>
			</form>
		</section>

		<section id="notes" class="bg-white p-6 rounded shadow">
			<h3 class="font-semibold mb-2">Upload Notes</h3>
			<p class="text-sm text-slate-600">This simplified scaffold uses a file upload endpoint you can implement in PHP.</p>
		</section>
	</div>
</div>

