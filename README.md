# adopt-them

The design of this project is a product of my imagination. Do not judge strictly 😱

## What has been implemented:
- [x] pagination for list of pets avalibale for adoption;
- [x] ability to change theme (2 choices available), theme will be saved even if the user reloads the page - `localStorage` usage;
- [x] when the user adopts a pet, this pet will appear above the search form and will remain even if the user refreshes the page - usage of `useContext` and `localStorage`;
- [x] use `useIntersectionObserver` custom hook ([`Intersection Observer API`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) usage) to perform animation when the user reaches a particular part of the web app;
- [x] the search form provides the ability to search for animals by animal type and breed (the list of breeds depends on the type of animal and appears when the animal type is selected);
- [x] use `react-query` for API call to minimize efffects in the code;
