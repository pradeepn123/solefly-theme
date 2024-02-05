function keepInStockActive() { 
    if(window.location.toString().includes("/collections/")){
        let searchParams = new URLSearchParams(window.location.search);
        if (!searchParams.has('filter.v.availability')) {
            searchParams.set('filter.v.availability', '1');
            window.location.search = searchParams.toString();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    keepInStockActive();
});