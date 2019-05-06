export default  (url) => {
  // Select first Script tag on page.
  let index = window.document.getElementsByTagName("script")[0];

  // Create New Script Tag for Google Maps API
  let script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;

  // Prepend Google Maps API Script to the first of list of scripts
  index.parentNode.insertBefore(script, index);
}