function showTab(tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Remove 'active' class from all tab buttons
    var tabButtons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Add 'active' class to the clicked tab button
    event.currentTarget.classList.add('active');
}

// Initially display the first tab
document.getElementById('store-details').style.display = 'block';


// Function to filter options based on the search input
function filterOptions(inputId, optionsListId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const optionsList = document.getElementById(optionsListId);
    const options = optionsList.getElementsByClassName('option');

    // Display the options list when typing
    optionsList.style.display = filter ? "block" : "none";

    for (let i = 0; i < options.length; i++) {
        const optionText = options[i].innerText || options[i].textContent;
        if (optionText.toLowerCase().indexOf(filter) > -1) {
            options[i].style.display = "";
        } else {
            options[i].style.display = "none";
        }
    }
}

// Function to handle option selection
function selectOption(option, inputId) {
    const input = document.getElementById(inputId);
    input.value = option.innerText;

    // Hide the options list after selection
    const optionsList = option.parentElement;
    optionsList.style.display = "none";
}

