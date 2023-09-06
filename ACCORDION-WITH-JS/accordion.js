function clickContent(event) {
    // Find the corresponding content element by navigating the DOM
    const restClass = document.querySelectorAll('.content');
    console.log(restClass);
    restClass.forEach((eachitem) => {
        if (eachitem.classList.contains('content-after')) {
            eachitem.classList.remove('content-after');
            
            // Reset the custom CSS property to '+'
            eachitem.previousElementSibling.style.setProperty('--mycontent', "'+'");
        }
    });
    
    const contentHeading = event.target;
    const content = event.target.nextElementSibling;

    // Toggle the "content-after" class on the content element
    if (content.classList.contains('content-after')) {
        content.classList.remove('content-after');
        
        // Reset the custom CSS property to '+'
        contentHeading.style.setProperty('--mycontent', "'+'");
    } else {
        content.classList.add('content-after');
        // Apply a custom CSS property to the parent heading
        contentHeading.style.setProperty('--mycontent', "'-'");
    }
}
