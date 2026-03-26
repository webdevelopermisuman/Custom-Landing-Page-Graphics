// ===== Testimonials =====
var starSVG = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';

var testimonials = [
  { text: "I was nervous about trading high-value cards on social media. CardTrade made me feel secure for the first time.", name: "Marcus J.", role: "Sports Card Collector" },
  { text: "No more PayPal fees eating into my margins. I\u2019ve saved hundreds already since switching to CardTrade for my deals.", name: "Sarah K.", role: "Full-time Seller" },
  { text: "The identity verification alone is worth it. Finally know who I\u2019m dealing with before sending anything out.", name: "Devon T.", role: "Trading Card Enthusiast" },
  { text: "I got burned twice on Facebook before finding CardTrade. The escrow feature gives me total peace of mind.", name: "Chris W.", role: "Basketball Card Collector" },
  { text: "Clean app, easy to use, and the protection is legit. It\u2019s like having a middleman without paying middleman fees.", name: "Rachel M.", role: "Pok\u00e9mon Card Trader" },
  { text: "Verified IDs mean no more fake accounts. Every deal I\u2019ve done through CardTrade has gone smoothly.", name: "Jordan P.", role: "Hobby Shop Owner" }
];

var grid = document.getElementById('testimonials-grid');
testimonials.forEach(function (t) {
  grid.innerHTML += '<div class="card-elevated testimonial-card">' +
    '<div class="stars">' + starSVG.repeat(5) + '</div>' +
    '<p class="quote">\u201C' + t.text + '\u201D</p>' +
    '<div class="author">' +
      '<div class="avatar">' + t.name.charAt(0) + '</div>' +
      '<div><div class="author-name">' + t.name + '</div>' +
      '<div class="author-role">' + t.role + '</div></div>' +
    '</div></div>';
});

// ===== FAQ Accordion =====
var faqs = [
  { q: "Do both people need CardTrade?", a: "Yes, both the buyer and seller need a CardTrade account. This ensures both parties are verified and the deal is protected from start to finish. Setting up an account takes under two minutes." },
  { q: "How does holding payment work?", a: "When you use our optional escrow feature, the buyer\u2019s payment is held securely until the seller ships and the buyer confirms delivery. This way, neither party is at risk \u2014 the seller knows the funds exist, and the buyer knows their money is safe." },
  { q: "What happens if something goes wrong?", a: "Every deal through CardTrade comes with scam protection. If a seller doesn\u2019t ship, or the item isn\u2019t as described, our resolution process kicks in. You\u2019re covered by our protection guarantee." },
  { q: "How does shipping insurance work?", a: "Shipping insurance is automatically included on every deal logged through CardTrade. If your package is lost, damaged, or stolen in transit, you\u2019re covered and can file a claim directly through the app." },
  { q: "Is this like PayPal Goods & Services?", a: "CardTrade goes further. Unlike PayPal G&S, we verify both parties\u2019 identities, hold payment in escrow, include shipping insurance, and offer scam protection \u2014 all without the fees that PayPal charges." }
];

var faqList = document.getElementById('faq-list');
faqs.forEach(function (f) {
  var item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = '<button class="faq-btn" aria-expanded="false" onclick="toggleFaq(this)">' +
    '<span>' + f.q + '</span>' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
    '</button><div class="faq-answer">' + f.a + '</div>';
  faqList.appendChild(item);
});

function toggleFaq(btn) {
  var answer = btn.nextElementSibling;
  var isOpen = answer.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-answer').forEach(function (a) { a.classList.remove('open'); });
  document.querySelectorAll('.faq-btn').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });

  // Open clicked if it was closed
  if (!isOpen) {
    answer.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

// ===== Footer Year =====
document.querySelector('.footer-bottom p').textContent = '\u00A9 ' + new Date().getFullYear() + ' CardTrade. All rights reserved.';
