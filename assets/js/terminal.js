// Simple typing animation for code blocks
document.addEventListener('DOMContentLoaded', function() {
    // Add typing animation to all pre code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const originalText = block.textContent;
        block.textContent = '';
        block.classList.add('typing-animation');
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                block.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 10); // Adjust speed here
            } else {
                block.classList.remove('typing-animation');
            }
        };
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    });
});
