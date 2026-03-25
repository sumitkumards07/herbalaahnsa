// Cart Logic for Aashna Herbals

let cart = JSON.parse(localStorage.getItem('aashna_cart')) || [];

function saveCart() {
    localStorage.setItem('aashna_cart', JSON.stringify(cart));
    updateCartIcon();
}

function updateCartIcon() {
    const counters = document.querySelectorAll('#cart-counter');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    counters.forEach(counter => {
        if (totalItems > 0) {
            counter.textContent = totalItems;
            counter.classList.remove('hidden');
        } else {
            counter.classList.add('hidden');
        }
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    showToast('Added to Cart', `${product.name} has been added!`, 'success');
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items-container');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 text-center">
                <span class="material-symbols-outlined text-6xl text-slate-300 mb-4">shopping_basket</span>
                <p class="text-slate-500 font-medium">Your cart is empty</p>
                <button onclick="toggleCart()" class="mt-4 text-primary font-bold hover:underline">Continue Shopping</button>
            </div>
        `;
        document.getElementById('cart-footer').classList.add('hidden');
        return;
    }

    document.getElementById('cart-footer').classList.remove('hidden');
    document.getElementById('cart-total-amount').textContent = `₹${calculateTotal().toLocaleString()}`;

    cartContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-4 py-4 border-b border-slate-100 dark:border-slate-800">
            <img src="${item.image}" alt="${item.name}" class="size-16 rounded-lg object-cover bg-slate-100">
            <div class="flex-1 min-w-0">
                <h4 class="font-bold text-sm text-slate-900 dark:text-slate-100 truncate">${item.name}</h4>
                <p class="text-primary font-bold text-sm">₹${item.price.toLocaleString()}</p>
                <div class="flex items-center gap-3 mt-2">
                    <button onclick="updateQuantity('${item.id}', -1)" class="size-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 hover:bg-primary/20 transition-colors">
                        <span class="material-symbols-outlined text-xs">remove</span>
                    </button>
                    <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', 1)" class="size-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 hover:bg-primary/20 transition-colors">
                        <span class="material-symbols-outlined text-xs">add</span>
                    </button>
                </div>
            </div>
            <button onclick="removeFromCart('${item.id}')" class="text-slate-400 hover:text-red-500 transition-colors">
                <span class="material-symbols-outlined text-lg">delete</span>
            </button>
        </div>
    `).join('');
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal.classList.contains('translate-x-full')) {
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('-translate-x-full')) {
            toggleMobileMenu();
        }
        cartModal.classList.remove('translate-x-full');
        document.getElementById('cart-overlay').classList.remove('hidden');
        renderCart();
    } else {
        cartModal.classList.add('translate-x-full');
        document.getElementById('cart-overlay').classList.add('hidden');
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    if (!mobileMenu || !overlay) return;

    if (mobileMenu.classList.contains('-translate-x-full')) {
        mobileMenu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

async function proceedToCheckout() {
    toggleCart();
    
    const { value: formValues } = await Swal.fire({
        title: 'Shipping Details',
        html:
            '<input id="swal-input1" class="swal2-input" placeholder="Full Name">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Delivery Address">' +
            '<input id="swal-input3" class="swal2-input" placeholder="Phone Number">',
        focusConfirm: false,
        confirmButtonText: 'Continue to Payment',
        confirmButtonColor: '#20df20',
        preConfirm: () => {
            const name = document.getElementById('swal-input1').value;
            const address = document.getElementById('swal-input2').value;
            const phone = document.getElementById('swal-input3').value;
            if (!name || !address || !phone) {
                Swal.showValidationMessage('Please fill all fields');
            }
            return { name, address, phone };
        }
    });

    if (formValues) {
        const { value: paymentMethod } = await Swal.fire({
            title: 'Payment Method',
            input: 'radio',
            inputOptions: {
                'cod': 'Cash on Delivery',
                'upi': 'UPI / GPay / PhonePe',
                'card': 'Credit / Debit Card'
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose a payment method!';
                }
            },
            confirmButtonText: 'Place Order',
            confirmButtonColor: '#20df20'
        });

        if (paymentMethod) {
            Swal.fire({
                title: 'Order Placed!',
                text: `Thank you, ${formValues.name}! Your order of ₹${calculateTotal().toLocaleString()} has been placed successfully. Order ID: ASH-${Math.floor(100000 + Math.random() * 900000)}`,
                icon: 'success',
                confirmButtonColor: '#20df20'
            });
            cart = [];
            saveCart();
            updateCartIcon();
        }
    }
}

// Global helper for toasts (if not already defined)
window.showToast = function (title, text, icon) {
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: icon,
        title: title,
        text: text,
    });
}

window.showProductDetails = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    Swal.fire({
        title: product.name,
        html: `
            <div class="flex flex-col gap-6 text-left p-2">
                <div class="relative aspect-square overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800 shadow-inner">
                    <img src="${product.image}" class="h-full w-full object-cover animate-float" alt="${product.name}">
                </div>
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <p class="text-3xl font-black text-primary">₹${product.price.toLocaleString()}</p>
                        ${product.oldPrice ? `<p class="text-sm text-slate-400 line-through">₹${product.oldPrice.toLocaleString()}</p>` : ''}
                    </div>
                    <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">${product.description}</p>
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm text-primary">verified_user</span>
                        <p class="text-xs text-slate-500">100% Pure & Organic Certified</p>
                    </div>
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Buy Now',
        cancelButtonText: 'Add to Cart',
        confirmButtonColor: '#20df20',
        cancelButtonColor: '#64748b',
        reverseButtons: true,
        customClass: {
            container: 'product-detail-modal',
            popup: 'rounded-3xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl',
            title: 'text-2xl font-bold dark:text-white pt-8 px-8 text-left',
            htmlContainer: 'px-6 pb-2',
            actions: 'flex gap-3 px-8 pb-8 pt-4 justify-stretch',
            confirmButton: 'flex-1 py-4 font-bold rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform',
            cancelButton: 'flex-1 py-4 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            addToCart(productId);
            setTimeout(() => {
                proceedToCheckout();
            }, 300);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            addToCart(productId);
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon();
    
    // Attach listeners to all cart buttons
    const cartBtns = document.querySelectorAll('[id^="cart-btn"]');
    cartBtns.forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            toggleCart();
        };
    });

    // Attach listener to mobile menu button
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }
});
