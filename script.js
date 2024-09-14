
document.addEventListener('DOMContentLoaded', function() {
    let testimonials = [];
    var errorBox = document.getElementById('error');
    var testimonialForm = document.getElementById('testimonialForm');

    if (testimonialForm) {
        testimonialForm.addEventListener('submit', submitTestimonial);
    } else {
        console.error('Testimonial form not found');
    }

    function submitTestimonial(event) {
        event.preventDefault();
        console.log("hi there");
        
        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let clientname = document.getElementById('clientname').value;
        let testimonialContent = document.getElementById('testimonialContent').value;

        if (title === "" || date === "" || clientname === "" || testimonialContent === "") {
            errorBox.textContent = 'Please complete the form.';
        } else {
            errorBox.textContent = '';
            var newTestimonial = {
                title: title,
                date: date,
                clientname: clientname,
                testimonialContent: testimonialContent
            };
            storeLocalStorage(newTestimonial);
            testimonialForm.reset();
        }
    }
});


function storeLocalStorage(newTestimonial) {
	let key = 'testimoniaList';
    try {
        // Retrieve existing data and ensure it's an array
        let existingData = JSON.parse(localStorage.getItem(key)) || [];

        // Add the new blog post to the existing array
        existingData.push(newTestimonial);

        // Update local storage with the new array
        localStorage.setItem(key, JSON.stringify(existingData));
    } catch (error) {
        console.error("Testimonial could not be stored");
    }
}


function readLocalStorage(key){
    // get data from local storage
                const localData = localStorage.getItem(key);
    
                // If statements for error handling
                // If no data is found, return an empty array
                if (localData === null) {
                      return {};
                }
       
            // If data is found try to return the data
                try {
                      return JSON.parse(localData);
                }
    
                // If data is not found, create a console error and return empty object
                catch (error) {
                      return {};
                }
    }

    
    function addToDOM(elementID, elementContent) {
        const element = document.getElementById(elementID);
            if (element) {
                    element.innerHTML += elementContent;
            } else {
                    return {}
            }
    }