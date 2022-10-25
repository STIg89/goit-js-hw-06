console.log(
  'Number of categories: ',
  document.querySelectorAll('.item').length,
);

document.querySelectorAll('h2').forEach(categoryName => {
  console.log('Category: ', categoryName.textContent);
  console.log('Elements: ', categoryName.nextElementSibling.childElementCount);
});
