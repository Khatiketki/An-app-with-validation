Purpose: This assignment will allow you to practice the creation of forms and validation functions.

Task: Create a page to register for a service. We will ask the user for some information, and in return, we will send them a pizza.

The page contains a form with the following fields and requirements:

Name: a string of at least three characters, required.
"Required" means: there must be a value in this field for the form to be submitted.
Year of birth: an integer number greater than 1900 and smaller than the current year, required.
A checkbox: "Do you live in the United States?"
Zipcode: A 5-digit number.
If the previous checkbox is not checked, the zipcode field does not appear.
If the previous checkbox is checked, the zipcode field appears and is required.
Password: a string with at least 8 characters. Its contents must be masked using the correct input type.
Preferred type of pizza: one of three choices, either "With pineapple", "Without pineapple", or "I do not like pizza". Only one choice can be selected, and a selection is required. 
When the "submit" button for the form is clicked, the page must run a script to validate all of the above.

Error messages should show up on the page for each validation error.
The page should show an "Accepted" message if the form is submitted without validation errors.
Your page, including the form, must contain the most semantic HTML elements for the content.

Attach reasonable CSS for the page to be usable and attractive to the user.  

You may find inspiration in real-life forms that ask for the same type of data, but you must not copy directly from them.

You may use helpers to construct and validate the form. Keep in mind that if you do so, I may be more strict in evaluating your assignment. 

Criteria and Examples:

You will submit the URL of a GitHub repository that contains your files.
The most important parts of this assignment are the code and the functionality. I will be testing for edge cases and will discount points for those that are not covered (for example: can a 0 be entered as year of birth? What about text that is not numbers? etc.)
Correct HTML, CSS, and readability will also be evaluated.
