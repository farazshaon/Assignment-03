function submitData() {
    var url = "https://api.example.com/submit";
    var data = {
        name: "John Doe",
        email: "johndoe@example.com"
    };
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
             body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
   
    console.log(result);
    })
        .catch(error => {

     console.error("Error:", error);
    });
    }

