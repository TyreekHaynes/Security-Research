// Full typing animation for code blocks
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const originalText = block.textContent;
        block.textContent = '';
        block.classList.add('typing-cursor');
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                block.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 20); // Slower speed for better visibility
            } else {
                block.classList.remove('typing-cursor');
            }
        };
        
        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    });
});
