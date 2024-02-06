
//     const dropdownBtn = document.querySelector('dropdown-opener.sort-list__btn');
//     // console.log(dropdownBtn);
//     // if (!dropdownBtn) return;

//     dropdownBtn.addEventListener('click', () => {
//         const dropdownList = document.querySelectorAll('[data-sort-list-label]');
//         dropdownList.forEach(element => {
//             element.addEventListener('click', () => {
//                 const isCollectionPage = window.location.pathname.includes('/collections/');
//                 const hasAvailabilityFilter = new URLSearchParams(window.location.search).has('filter.v.availability');
//                 console.log(hasAvailabilityFilter);
//                 if (isCollectionPage) {
//                     const searchParams = window.location.search;
//                     console.log(searchParams);
//                     // const availableFilter = '&filter.v.availability=1';
//                     searchParams.append(searchParams);
//                     // searchParams.set('filter.v.availability', '1');
//                     // window.location.search = searchParams.toString();
//                 }
//             });
//         });
//     });


// // document.addEventListener('DOMContentLoaded', initializingFilter);