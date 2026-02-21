/* ===== PRODUCT DATA ===== */
var productData = [
  { title:'Wireless Bluetooth 5.3 Headphones Active Noise Cancelling HiFi Stereo Bass Gaming Headset', price:24.99, original:89.99, discount:72, orders:2847, rating:4.8, icon:'🎧' },
  { title:'Smart Watch Ultra Series 9 Bluetooth Call Heart Rate Blood Oxygen Monitor Waterproof Sports', price:18.49, original:69.99, discount:74, orders:5230, rating:4.7, icon:'⌚' },
  { title:'USB C Hub Multiport Adapter 7-in-1 Type C to HDMI 4K USB 3.0 SD TF Card Reader PD Charging', price:12.99, original:34.99, discount:63, orders:8920, rating:4.9, icon:'🔌' },
  { title:'Portable Wireless Charger 15W Fast Charging Pad Compatible with iPhone Samsung Galaxy', price:8.99, original:29.99, discount:70, orders:12400, rating:4.6, icon:'🔋' },
  { title:'TWS Wireless Earbuds Bluetooth 5.3 In-Ear Headphones with Charging Case LED Display', price:9.99, original:39.99, discount:75, orders:18500, rating:4.5, icon:'🎵' },
  { title:'Mini Portable Power Bank 20000mAh Fast Charging USB C External Battery Pack LED Display', price:15.99, original:49.99, discount:68, orders:7600, rating:4.8, icon:'🔋' },
  { title:'RGB Gaming Mouse 12800 DPI Wired Optical Mice 7 Buttons Programmable Ergonomic PC Gamer', price:7.49, original:24.99, discount:70, orders:9300, rating:4.7, icon:'🖱️' },
  { title:'Phone Case Luxury Leather Magnetic Cover with Card Holder Stand for iPhone 15 Pro Max', price:4.99, original:19.99, discount:75, orders:15200, rating:4.4, icon:'📱' },
  { title:'LED Desk Lamp Eye-Caring Table Light 3 Color Modes 10 Brightness Levels USB Charging Port', price:16.99, original:45.99, discount:63, orders:4200, rating:4.9, icon:'💡' },
  { title:'Mechanical Gaming Keyboard RGB Backlit Hot-Swappable 87 Keys Compact TKL Wireless Bluetooth', price:29.99, original:79.99, discount:63, orders:3800, rating:4.8, icon:'⌨️' },
  { title:'Webcam 4K Ultra HD Auto Focus with Built-in Microphone USB Web Camera for PC Laptop Streaming', price:19.99, original:59.99, discount:67, orders:5100, rating:4.6, icon:'📷' },
  { title:'Laptop Stand Adjustable Aluminum Alloy Ergonomic Notebook Holder Compatible with MacBook', price:13.99, original:39.99, discount:65, orders:6700, rating:4.7, icon:'💻' },
  { title:'Wireless Bluetooth Speaker Portable Waterproof IPX7 Outdoor Mini Sound Box 24H Playtime', price:11.49, original:34.99, discount:67, orders:8900, rating:4.5, icon:'🔊' },
  { title:'Smart Ring Health Tracker Sleep Monitor Heart Rate Blood Oxygen SpO2 Waterproof Titanium', price:22.99, original:79.99, discount:71, orders:3200, rating:4.3, icon:'💍' },
  { title:'Neck Fan Portable Bladeless 360° Cooling Wearable Personal Fan USB Rechargeable 3 Speeds', price:6.99, original:24.99, discount:72, orders:11200, rating:4.4, icon:'🌀' },
  { title:'Car Phone Mount Dashboard Windshield Air Vent Holder 360° Rotation Strong Suction Cup', price:5.49, original:18.99, discount:71, orders:14500, rating:4.6, icon:'🚗' },
  { title:'Fitness Tracker Band Smart Bracelet Waterproof Step Counter Calories Sleep Monitor Sport', price:8.99, original:29.99, discount:70, orders:9800, rating:4.5, icon:'⌚' },
  { title:'USB Microphone Professional Condenser PC Mic for Gaming Streaming Podcast Recording Studio', price:21.99, original:64.99, discount:66, orders:4100, rating:4.8, icon:'🎙️' },
  { title:'Electric Toothbrush Sonic Rechargeable 5 Modes IPX7 Waterproof Smart Timer Travel Case', price:12.99, original:44.99, discount:71, orders:7300, rating:4.7, icon:'🪥' },
  { title:'Action Camera 4K 60FPS WiFi Waterproof Sports DV Helmet Cam with Remote Control Accessories', price:34.99, original:99.99, discount:65, orders:2900, rating:4.6, icon:'📹' },
  { title:'Air Purifier HEPA Filter Desktop Mini Home Office Bedroom Remove Dust Smoke Allergen Pet Dander', price:26.99, original:79.99, discount:66, orders:3400, rating:4.8, icon:'🌬️' },
  { title:'Robot Vacuum Cleaner Smart Auto Sweeping Mopping LiDAR Navigation App Control 3000Pa Suction', price:89.99, original:249.99, discount:64, orders:2100, rating:4.7, icon:'🤖' },
  { title:'Dash Cam 4K Front and Rear Dual Camera Car DVR GPS Night Vision Parking Monitor Loop Recording', price:32.99, original:89.99, discount:63, orders:5600, rating:4.6, icon:'📹' },
  { title:'Wireless Charging Mouse Pad RGB LED Extended Large Gaming Desk Mat 800x300mm Anti-Slip', price:14.99, original:39.99, discount:63, orders:6200, rating:4.5, icon:'🖱️' },
  { title:'Smart Door Lock Fingerprint Digital Electronic Lock WiFi App Control Keyless Entry Deadbolt', price:45.99, original:129.99, discount:65, orders:1800, rating:4.4, icon:'🔐' },
  { title:'3D Printer PLA Filament 1.75mm 1KG Spool Dimensional Accuracy Multiple Colors Available', price:9.99, original:24.99, discount:60, orders:8400, rating:4.7, icon:'🖨️' },
  { title:'Drone with 4K Camera GPS Return FPV Quadcopter Brushless Motor 30min Flight Carry Bag', price:59.99, original:169.99, discount:65, orders:2400, rating:4.5, icon:'🚁' },
  { title:'Electric Scooter Tire Solid Rubber Replacement Honeycomb Non-Pneumatic for Xiaomi M365', price:11.99, original:29.99, discount:60, orders:4700, rating:4.3, icon:'🛴' },
  { title:'Solar Power Bank 30000mAh Portable Charger Wireless Charging LED Flashlight Outdoor Camping', price:19.99, original:54.99, discount:64, orders:5900, rating:4.6, icon:'☀️' },
  { title:'Retro Handheld Game Console 3.5 inch IPS Screen 64GB 10000+ Classic Games Portable Player', price:24.99, original:69.99, discount:64, orders:3600, rating:4.8, icon:'🎮' }
];

/* ===== BUILD PRODUCT CARD HTML ===== */
function buildProductCard(index) {
  var p = productData[index % productData.length];
  return '<a href="product.html" class="product-card">' +
    '<div class="product-card__discount">-' + p.discount + '%</div>' +
    '<div class="product-card__img">' + p.icon + '</div>' +
    '<div class="product-card__body">' +
      '<div class="product-card__title">' + p.title + '</div>' +
      '<div class="product-card__price">' +
        '<span class="current">$' + p.price.toFixed(2) + '</span>' +
        '<span class="original">$' + p.original.toFixed(2) + '</span>' +
      '</div>' +
      '<div class="product-card__meta">' +
        '<span class="orders">' + formatOrders(p.orders) + ' sold</span>' +
        '<span class="rating">★ ' + p.rating + '</span>' +
      '</div>' +
    '</div>' +
  '</a>';
}

function formatOrders(n) {
  if (n >= 10000) return (n / 1000).toFixed(0) + 'k+';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k+';
  return n + '';
}

/* ===== INIT HOME PAGE ===== */
document.addEventListener('DOMContentLoaded', function() {
  initFlashDeals();
  initMoreToLove();
  initHeroSlider();
  initCountdown();
  initBackToTop();
});

/* ===== FLASH DEALS ===== */
function initFlashDeals() {
  var grid = document.getElementById('flashDealsGrid');
  if (!grid) return;
  var html = '';
  for (var i = 0; i < 6; i++) html += buildProductCard(i);
  grid.innerHTML = html;
}

/* ===== MORE TO LOVE ===== */
var moreLoveCount = 10;
function initMoreToLove() {
  var grid = document.getElementById('moreLoveGrid');
  if (!grid) return;
  var html = '';
  for (var i = 0; i < moreLoveCount; i++) html += buildProductCard(i);
  grid.innerHTML = html;
}
function loadMoreProducts() {
  var grid = document.getElementById('moreLoveGrid');
  if (!grid) return;
  var html = '';
  moreLoveCount += 10;
  if (moreLoveCount > productData.length) moreLoveCount = productData.length;
  for (var i = 0; i < moreLoveCount; i++) html += buildProductCard(i);
  grid.innerHTML = html;
  showToast('Loaded more products!', 'success');
}

/* ===== HERO SLIDER ===== */
var heroIndex = 0;
var heroTimer = null;
function initHeroSlider() {
  var slides = document.getElementById('heroSlides');
  var dots = document.getElementById('heroDots');
  if (!slides || !dots) return;
  var count = slides.children.length;
  dots.innerHTML = '';
  for (var i = 0; i < count; i++) {
    var dot = document.createElement('div');
    dot.className = 'hero__dot' + (i === 0 ? ' hero__dot--active' : '');
    dot.setAttribute('data-i', i);
    dot.addEventListener('click', function() { goToSlide(parseInt(this.getAttribute('data-i'))); });
    dots.appendChild(dot);
  }
  heroTimer = setInterval(function() { moveSlide(1); }, 5000);
}
function moveSlide(dir) {
  var slides = document.getElementById('heroSlides');
  if (!slides) return;
  var count = slides.children.length;
  heroIndex = (heroIndex + dir + count) % count;
  goToSlide(heroIndex);
}
function goToSlide(i) {
  heroIndex = i;
  var slides = document.getElementById('heroSlides');
  if (slides) slides.style.transform = 'translateX(-' + (heroIndex * 100) + '%)';
  var dots = document.querySelectorAll('.hero__dot');
  dots.forEach(function(d, idx) {
    d.classList.toggle('hero__dot--active', idx === heroIndex);
  });
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(function() { moveSlide(1); }, 5000);
}

/* ===== COUNTDOWN TIMER ===== */
function initCountdown() {
  var h = document.getElementById('fd-h');
  var m = document.getElementById('fd-m');
  var s = document.getElementById('fd-s');
  if (!h || !m || !s) return;
  var total = 8 * 3600 + 45 * 60 + 12;
  setInterval(function() {
    total--;
    if (total < 0) total = 24 * 3600;
    var hh = Math.floor(total / 3600);
    var mm = Math.floor((total % 3600) / 60);
    var ss = total % 60;
    h.textContent = (hh < 10 ? '0' : '') + hh;
    m.textContent = (mm < 10 ? '0' : '') + mm;
    s.textContent = (ss < 10 ? '0' : '') + ss;
  }, 1000);
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  var btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
}

/* ===== TOAST ===== */
function showToast(msg, type) {
  var el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = 'toast show' + (type ? ' toast--' + type : '');
  setTimeout(function() { el.className = 'toast'; }, 3000);
}

/* ===== MODAL ===== */
function openModal(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add('active');
}
function closeModal(id) {
  var el = document.getElementById(id);
  if (el) el.classList.remove('active');
}
