window.addEventListener("load", function () {
    setTimeout(function () {
        const overlay = document.querySelector(".loading-screen");
        overlay.style.opacity = "0"; // Fade out by changing opacity to 0

        // Wait for the CSS transition to complete, then hide the element
        setTimeout(() => {
            overlay.style.display = "none";
        }, 1000); // Match this to the duration of the CSS transition (1 second)
    }, 5000); // Delay for 5 seconds before starting fade-out
});


const servers = document.querySelectorAll('.server-logo-container');

    servers.forEach(server => {
        server.addEventListener('mouseenter', () => {
            const hoverServer = server.querySelector('.hover-server');
            const rect = server.getBoundingClientRect(); // Get position relative to the viewport

            hoverServer.style.top = `${rect.top}px`;
            hoverServer.style.left = `${rect.right + 5}px`; // Adjust for padding
            hoverServer.style.opacity = 1;
            });
        server.addEventListener('mouseleave', () => {
            const hoverServer = server.querySelector('.hover-server');
            hoverServer.style.opacity = 0;
        });
    });

    const sectionMiddle = document.getElementById("sectionMiddle");
    const sectionTop = document.getElementById("sectionTop");

    sectionMiddle.addEventListener("scroll", () => {
        if (sectionMiddle.scrollTop > 0) {
            sectionTop.style.background = "#2b2d31"; // Change to solid background
            sectionTop.style.borderBottom = "1px solid black"; // Add the border
        } else {
            sectionTop.style.background = "linear-gradient(to bottom, rgb(134, 134, 134), transparent)"; // Revert to gradient
            sectionTop.style.borderBottom = "none"; // Remove the border
        }
    });

    const chatInput = document.querySelector('.chat-input');
    const chatting = document.querySelector('.chatting');
    const otherDiv = document.querySelector('.main-messages'); 
    
    // Capture the initial height of the textarea
    const initialHeight = chatInput.offsetHeight;
    
    // Add an input event listener to the textarea
    chatInput.addEventListener('input', function () {
        // Reset the height to the initial height before calculating
        this.style.height = `${initialHeight}px`;
    
        if (this.scrollHeight > this.clientHeight) {
            // Increase the height of the textarea and chatting
            this.style.height = `${this.scrollHeight}px`;
            chatting.style.height = `${this.scrollHeight}px`;
    
            // Apply a style to the otherDiv when height increases
            otherDiv.style.paddingBottom = '100px';
        } else {
            // Ensure chatting container matches the initial height if content shrinks
            chatting.style.height = `${initialHeight}px`;
    
            // Revert the style in the otherDiv when height decreases
            otherDiv.style.paddingBottom = '90px'; // Revert to original style
        }
    });
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const scrollableDiv = document.querySelector('.main-messages'); 
    
        // On page load, scroll to the bottom
        scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
    
        // Listen for the Escape key and scroll to the bottom
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') { // Check if the pressed key is Escape
                scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
            }
        });
    });
    
    
    const smlIcon = document.querySelector('.sml-icon');
    const mainUser = document.querySelector('main');
    const anotherDiv = document.querySelector('.message-nav');
    
    // Add click event listener to sml-icon
    smlIcon.addEventListener('click', () => {
        // Toggle gridTemplate on mainUser
        if (mainUser.style.gridTemplate === 'auto 1fr / 1fr auto' || mainUser.style.gridTemplate === '') {
            mainUser.style.gridTemplate = 'auto 1fr / 1fr 0px';
            anotherDiv.style.right = '0';
            smlIcon.style.fill = '#b5bac1';
        } else {
            mainUser.style.gridTemplate = 'auto 1fr / 1fr auto';
            anotherDiv.style.right = '240px';
            smlIcon.style.fill = '#ffffff';
        }
    });
    