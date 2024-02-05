function initializingFilter() { 
    var dropdownList = document.querySelectorAll("[data-sort-list-label]");
    console.log(dropdownList);
    dropdownList.forEach((element) => console.log(element));
}

document.addEventListener('DOMContentLoaded', function() {
    initializingFilter();
});