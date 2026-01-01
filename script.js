<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CleanCare Services</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <h1>CleanCare 🧹</h1>
    <nav>
        <a href="#home">Home</a>
        <a href="#menu">Services</a>
        <a href="#cart">Booking</a>
        <a href="#feedback">Feedback</a>
    </nav>
</header>

<section id="home" class="hero">
    <div class="hero-content">
        <h2>Professional Cleaning Services</h2>
        <p>Homes • Offices • Deep Cleaning</p>
        <a href="#menu" class="hero-btn">Book a Service</a>
    </div>
</section>

<section id="menu" class="menu">
<h2>Our Cleaning Services</h2>

<div class="menu-grid">

    <div class="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsldDpiDcdcAh_Nh7PzCDp8T-34Bcod6LEyQ&s">
        <h4>Home Deep Cleaning</h4>
        <p>₹2500</p>
        <button onclick="addToCart('Home Deep Cleaning',2500)">Book</button>
    </div>

    <div class="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiYxYAb7xZqxWs3ZQmEMAqYyYwDv4OR4CsA&s">
        <h4>Office Cleaning</h4>
        <p>₹3000</p>
        <button onclick="addToCart('Office Cleaning',3000)">Book</button>
    </div>

    <div class="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtbHLG1lmaj1pFwaA6jMfudCDLOsoknqbHw&s">
        <h4>Kitchen Cleaning</h4>
        <p>₹1200</p>
        <button onclick="addToCart('Kitchen Cleaning',1200)">Book</button>
    </div>

    <div class="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDs1bYCDYHnT40D4augZjBg1xBjmW1_1ZtQ&s">
        <h4>Bathroom Cleaning</h4>
        <p>₹800</p>
        <button onclick="addToCart('Bathroom Cleaning',800)">Book</button>
    </div>

    <div class="item">
        <img src="https://jamesbonddrycleaners.com/wp-content/uploads/2025/04/sofa1.jpg">
        <h4>Sofa & Carpet Cleaning</h4>
        <p>₹1500</p>
        <button onclick="addToCart('Sofa & Carpet Cleaning',1500)">Book</button>
    </div>

</div>
</section>

<section id="cart" class="cart">
<h2>Your Booking</h2>

<ul id="cartItems">
    <li class="empty">No services selected yet</li>
</ul>

<h3>Total: ₹<span id="total">0</span></h3>

<div class="coupon">
    <input type="text" id="couponCode" placeholder="Coupon: NEWYEAR10">
    <button onclick="applyCoupon()">Apply Coupon</button>
    <button onclick="confirmOffer()">Confirm Order</button>

    <p>Discount: ₹<span id="discount">0</span></p>
    <p><b>Final Amount: ₹<span id="finalAmount">0</span></b></p>
</div>
</section>

<section id="feedback" class="feedback">
<h2>Customer Feedback</h2>

<form onsubmit="return validateFeedback()">
    <input type="text" id="fbName" placeholder="Your Name" required>
    <input type="email" id="fbEmail" placeholder="Your Email" required>
    <input type="text" id="fbMobile" placeholder="Mobile Number" required>
    <textarea id="fbMsg" placeholder="Your Feedback" required></textarea>
    <button type="submit">Submit & Download</button>
</form>
</section>

<footer>© 2025 CleanCare Services</footer>

<script src="script.js"></script>
</body>
</html>
