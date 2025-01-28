function calculateArea(length, width) {
    return length * width; // Function with parameters and return value
}

function demonstrateScope() {
    var localVar = "I'm local"; // Local variable
    globalVar = "I'm global"; // Global variable
}

function toggleAnimation(element) {
    element.classList.toggle('hidden'); // Toggle class for animation
}

// Example usage:
console.log("Area of rectangle:", calculateArea(5, 10)); // Output area
demonstrateScope();
console.log(globalVar); // Accessing global variable

// Event listener for button click to trigger animation
document.getElementById('animateBtn').addEventListener('click', function() {
    const spinner = document.querySelector('.spinner');
    toggleAnimation(spinner);
});
