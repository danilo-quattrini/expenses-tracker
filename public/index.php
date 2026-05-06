<?php
const BASE_DIR = __DIR__ . '/../';

function base_path($path): string
{
    return BASE_DIR . $path;
}

require base_path('views/index.view.php');