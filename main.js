 form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    // Create new FormData object
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    // Post the payload using Fetch:
    fetch('https://8pt33tpuvg.execute-api.us-east-2.amazonaws.com/V1/reversestringcall', {
      method: 'POST',
      body: JSON.stringify(formDataObject)
    }).then(res => res.json()).then(data => {
//log the response obtained to the browser console
      console.log(data);
// call to the function displayToHTML
      displayToHTML(data)
    })

    function displayToHTML(data) {
      const form = document.getElementById('form');
      document.getElementById("demo").innerHTML = '<span> Reversed String is: '+data.reversed_string + '</span>';
    }
  })