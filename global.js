// ============================================
// GLOBAL.JS - Complete Working Version
// All widgets injected dynamically
// ============================================

console.log('✅ global.js loaded successfully');

// ============================================
// Function to inject all widgets
// ============================================
function injectWidgets() {
    console.log('🔄 Injecting widgets...');
    
    // ============================================
    // 1. CHAT WIDGET HTML
    // ============================================
    const chatHTML = `
<!-- Toggle Chat Widget - Left Side -->
<div class="chat-container">
    <!-- Chat Button (Floating) -->
    <div class="chat-toggle-btn" id="chatToggleBtn">
        <i class="fab fa-whatsapp"></i>
        <span class="chat-badge">1</span>
    </div>
    
    <!-- Chat Window -->
    <div class="chat-window" id="chatWindow">
        <div class="chat-header">
            <div class="chat-header-info">
                <div class="chat-avatar">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <div class="chat-info">
                    <h4>Mahogany Travel Expeditions</h4>
                    <p>Online | Usually replies in 5 mins</p>
                </div>
            </div>
            <button class="chat-close" id="chatCloseBtn">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="chat-body">
            <div class="chat-message support">
                <div class="message-bubble">
                    <p>👋 Hi there! Welcome to Mahogany Travel Expeditions.</p>
                    <span class="message-time">Just now</span>
                </div>
            </div>
            <div class="chat-message support">
                <div class="message-bubble">
                    <p>How can we help you with your safari adventure today?</p>
                    <span class="message-time">Just now</span>
                </div>
            </div>
        </div>
        
        <div class="chat-options">
            <a href="https://wa.me/256707644004?text=Hello!%20I%20need%20help%20with%20booking%20a%20gorilla%20trekking%20safari." 
               class="chat-option-btn whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i> Start WhatsApp Chat
            </a>
            <a href="booking.html" class="chat-option-btn booking-btn">
                <i class="fas fa-calendar-check"></i> Make a Booking
            </a>
            <a href="contact.html" class="chat-option-btn contact-btn">
                <i class="fas fa-envelope"></i> Send Email Inquiry
            </a>
        </div>
    </div>
</div>
    `;

    // ============================================
    // 2. BOOKING BUTTON HTML
    // ============================================
    const bookingHTML = `
<!-- Floating Booking Button - Bottom Center (Pill Shape) -->
<div class="booking-float">
    <a href="booking.html" class="booking-float-btn">
        <span>BOOK NOW</span>
    </a>
</div>
    `;

    // ============================================
    // 3. INJECT HTML INTO BODY
    // ============================================
    document.body.insertAdjacentHTML('beforeend', chatHTML);
    document.body.insertAdjacentHTML('beforeend', bookingHTML);
    console.log('✅ HTML injected');

    // ============================================
    // 4. TAWK.TO LIVE CHAT SCRIPT
    // ============================================
    // Check if Tawk.to already exists to avoid duplicates
    if (!document.querySelector('script[src*="tawk.to"]')) {
        const tawkScript = document.createElement('script');
        tawkScript.type = 'text/javascript';
        tawkScript.async = true;
        tawkScript.src = 'https://embed.tawk.to/6a0ea94962b0761c3d8d4f8a/1jp4kaivp';
        tawkScript.charset = 'UTF-8';
        tawkScript.setAttribute('crossorigin', '*');
        document.body.appendChild(tawkScript);
        console.log('✅ Tawk.to loaded');
    } else {
        console.log('ℹ️ Tawk.to already exists');
    }

    // ============================================
    // 5. CHAT WIDGET FUNCTIONALITY
    // ============================================
    // Use setTimeout to ensure elements are in DOM
    setTimeout(function() {
        const toggleBtn = document.getElementById('chatToggleBtn');
        const chatWindow = document.getElementById('chatWindow');
        const closeBtn = document.getElementById('chatCloseBtn');
        
        if (toggleBtn && chatWindow) {
            // Toggle chat window
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                chatWindow.classList.toggle('active');
                console.log('Chat toggled:', chatWindow.classList.contains('active'));
            });
            console.log('✅ Chat toggle button working');
        } else {
            console.warn('⚠️ Chat elements not found');
        }
        
        if (closeBtn && chatWindow) {
            // Close chat window
            closeBtn.addEventListener('click', function() {
                chatWindow.classList.remove('active');
            });
            console.log('✅ Chat close button working');
        }
        
        // Close chat when clicking outside
        document.addEventListener('click', function(event) {
            if (chatWindow && toggleBtn) {
                const isClickInside = chatWindow.contains(event.target) || toggleBtn.contains(event.target);
                if (!isClickInside && chatWindow.classList.contains('active')) {
                    chatWindow.classList.remove('active');
                }
            }
        });
    }, 100); // Small delay to ensure DOM is ready
    
    console.log('✅ All widgets initialized');
}

// ============================================
// 6. RUN WHEN PAGE IS READY
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectWidgets);
} else {
    // DOM already loaded, run immediately
    injectWidgets();
}