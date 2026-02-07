<?php
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$routes = [
    '/' => 'home',
    '/home' => 'home',
    '/about' => 'about',
    '/academics' => 'academics',
    '/admin' => 'admin',
    '/student' => 'student',
];

// Let PHP built-in server serve existing files in the folder if present
if (php_sapi_name() === 'cli-server') {
    $file = __DIR__ . $uri;
    if ($uri !== '/' && file_exists($file) && !is_dir($file)) {
        return false;
    }
}

include __DIR__ . '/templates/header.php';

$page = $routes[$uri] ?? null;
if ($page) {
    $path = __DIR__ . '/pages/' . $page . '.php';
    if (file_exists($path)) {
        include $path;
    } else {
        http_response_code(404);
        echo "<h1>404 Not Found</h1><p>Missing page: {$page}</p>";
    }
} else {
    http_response_code(404);
    echo "<h1>404 Not Found</h1><p>No route for {$uri}</p>";
}

include __DIR__ . '/templates/footer.php';
