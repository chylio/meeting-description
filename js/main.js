// Global function for image error handling
window.handleImageError = function(imageElement, fallbackText = '圖片載入失敗') {
    imageElement.onerror = null; // Prevent infinite loop
    imageElement.src = ''; // Clear the broken image src
    imageElement.alt = fallbackText; // Set alt text
    imageElement.style.backgroundColor = '#ccc';
    imageElement.style.display = 'flex';
    imageElement.style.alignItems = 'center';
    imageElement.style.justifyContent = 'center';
    imageElement.style.color = '#666';
    imageElement.style.fontSize = '1.2rem';
    imageElement.style.height = 'auto'; // Adjust height
    imageElement.style.minHeight = '150px'; // Ensure it's visible
    imageElement.style.width = '100%';
    imageElement.style.objectFit = 'contain'; // Ensure text is visible
};

// Specific handling for the home section background image (only applies to home.html)
document.addEventListener('DOMContentLoaded', () => {
    const homeBgDiv = document.querySelector('#home .bg-cover');
    if (homeBgDiv) {
        const img = new Image();
        // You might want to save this image locally and use a relative path like 'images/barcelona-cityscape.jpg'
        img.src = 'https://images.unsplash.com/photo-1534351450181-ea1071850128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjVtaWQiOjEyMDd9&ixlib=rb-1.2.1&q=80&w=1080'; 
        img.onerror = () => {
            homeBgDiv.style.backgroundImage = 'none';
            homeBgDiv.style.backgroundColor = '#ccc';
            homeBgDiv.innerHTML = '<div class=\'flex items-center justify-center h-full text-gray-600 text-2xl\'>背景圖片載入失敗</div>';
        };
        // Set the background image once the image object is ready or loaded
        if (img.complete) {
            homeBgDiv.style.backgroundImage = `url('${img.src}')`;
        } else {
            img.onload = () => {
                homeBgDiv.style.backgroundImage = `url('${img.src}')`;
            };
        }
    }

    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', function() {
            navLinks.classList.toggle('hidden');
        });
    }

    // Highlight active navigation item based on current page URL
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname.split('/').pop(); // Gets 'home.html', 'venue.html', etc.

    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPath || (currentPath === '' && itemHref === 'home.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
