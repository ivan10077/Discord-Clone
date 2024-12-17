const section = document.querySelector('.section');
const sectionHeader = document.querySelector('.section-header');

// Add scroll event listener to the section
section.addEventListener('scroll', () => {
    // Check how far the user has scrolled
    if (section.scrollTop > 0) {
        sectionHeader.style.backgroundColor = '#2b2d31'; // Change background color
        sectionHeader.style.borderBottom = '2px solid black'; // Add border
        sectionHeader.style.backgroundColor = 'none';
    } else {
        sectionHeader.style.backgroundColor = 'transparent'; // Reset background color
        sectionHeader.style.borderBottom = 'none'; // Remove border
        sectionHeader.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)';
    }
});
