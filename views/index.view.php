<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker</title>
    <!-- TAILWIND CDN-->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body class="mx-auto h-full max-w-7xl">
<div class="flex-col justify-center items-center">
    <!--PAGE TITLE AND EXPENSES-->
    <?php require 'partials/expenses.php' ?>

    <!--OPERATION TO ADD A NEW EXPENSE-->
    <h2
        class="text-center text-3xl font-medium py-4"
    >
        Add new expense
    </h2>
    <div>
        <input
            id="name"
            name="name"
            type="text"
            placeholder="Grocery.."
            class="px-3 py-2 border rounded-md"
        />
        <input
            id="price"
            name="price"
            type="number"
            placeholder="$10.00"
            class="px-3 py-2 border rounded-md"
        />
        <input
            id="date"
            name="date"
            type="date"
            class="px-3 py-2 border rounded-md"
        />
        <button
            class="px-5 py-2 bg-blue-500 rounded-md text-white cursor-pointer"
            id="add-expense"
            onclick="add()"
        >
            Add
        </button>
        <!--ERROR LIST TO SHOW IF ANY CONDITION IT'S NOT SATISFIED-->
        <ul id="error-list"></ul>
    </div>
</div>
<script src="js/functions.js"></script>
<script src="js/javascript-fundamentals.js"></script>
<script src="js/conditions.js"></script>
<script src="js/arrays.js"></script>
</body>

</html>