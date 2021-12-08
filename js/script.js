jQuery(document).ready(function() {
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});

const btn3 = document.querySelector(".btn3");
const btn6 = document.querySelector(".btn6");
const btn11 = document.querySelector(".btn11");
const btn12 = document.querySelector(".btn12");
const btn14 = document.querySelector(".btn14");
const btn15 = document.querySelector(".btn15");
const btn16 = document.querySelector(".btn16");
const packageOptions = document.querySelector(".package-options");
const packageOptions2 = document.querySelector(".package-options-step2");
const packageOptions3 = document.querySelector(".package-options-step3");
const packageOptions4 = document.querySelector(".package-options-step4");

btn3.addEventListener('click', function() {
    packageOptions.style.display = "block";
})
btn6.addEventListener('click', function() {
    packageOptions2.style.display = "block";
    packageOptions3.style.display = "block";
})
btn11.addEventListener('click', function() {
    packageOptions2.style.display = "block";
    packageOptions3.style.display = "block";
})
btn12.addEventListener('click', function() {
    packageOptions3.style.display = "block";
    packageOptions2.style.display = "none";
})
btn14.addEventListener('click', function() {
    packageOptions4.style.display = "block";
})
btn15.addEventListener('click', function() {
    packageOptions4.style.display = "block";
})
btn16.addEventListener('click', function() {
    packageOptions4.style.display = "block";
})