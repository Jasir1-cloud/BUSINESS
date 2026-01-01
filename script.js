let cart = {};
let total = 0;
let discount = 0;
let offerConfirmed = false;

function addToCart(item, price) {
    if (!cart[item]) cart[item] = { qty: 0, price };
    cart[item].qty++;
    total += price;
    resetOffer();
    updateCart();
}

function changeQty(item, delta) {
    cart[item].qty += delta;
    total += cart[item].price * delta;
    if (cart[item].qty <= 0) delete cart[item];
    resetOffer();
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cartItems");
    list.innerHTML = "";

    if (Object.keys(cart).length === 0) {
        list.innerHTML = "<li class='empty'>No services selected yet</li>";
    }

    for (let item in cart) {
        list.innerHTML += `
        <li>
            ${item} × ${cart[item].qty}
            <div>
                <button onclick="changeQty('${item}',1)">+</button>
                <button onclick="changeQty('${item}',-1)">−</button>
            </div>
        </li>`;
    }

    document.getElementById("total").innerText = total;
    document.getElementById("finalAmount").innerText = total - discount;
}

function applyCoupon() {
    const code = couponCode.value.trim().toUpperCase();
    if (code === "NEWYEAR10") {
        discount = total * 0.10;
        alert("Coupon applied! Click Confirm Offer.");
    } else {
        discount = 0;
        alert("Invalid coupon");
    }
    document.getElementById("discount").innerText = discount.toFixed(0);
    document.getElementById("finalAmount").innerText = (total - discount).toFixed(0);
}

function confirmOffer() {
    if (discount === 0) {
        alert("Apply a coupon first.");
        return;
    }
    offerConfirmed = true;
    alert("Offer confirmed!");
}

function resetOffer() {
    if (!offerConfirmed) {
        discount = 0;
        document.getElementById("discount").innerText = "0";
        document.getElementById("finalAmount").innerText = total;
    }
}

function submitFeedback() {
    const text =
        "Name: " + fbName.value +
        "\n\nFeedback:\n" + fbMsg.value;

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "feedback.txt";
    link.click();
    return false;
}
