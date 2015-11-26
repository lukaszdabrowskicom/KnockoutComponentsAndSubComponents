<html>
 <head>
    <script src="Scripts/knockout-3.3.0.js"></script>
    <script src="Scripts/app.js"></script>
    <script src="Scripts/viewmodels/app-view-model.js"></script>
 </head>
<body>
<ul data-bind="foreach: products">
    <li class="product">
        <strong data-bind="text: name"></strong>
        <like-or-dislike params="value: userRating"></like-or-dislike>
    </li>
</ul>
<button data-bind="click: addProduct">Add a product</button>
</body>
</html>