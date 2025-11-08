// Terminal animations for code blocks
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Terminal.js loaded - adding animations');
    
    // Add blinking cursor to all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    console.log('📝 Found', codeBlocks.length, 'code blocks');
    
    codeBlocks.forEach((block, index) => {
        // Add the blinking cursor class
        block.classList.add('typing-cursor');
        console.log('✨ Added cursor to block', index + 1);
    });
    
    console.log('🎉 All animations applied');
});
