fetch("json/temples")
    .then(response => response.json)
    .then( response => {
        console.log(response);
    }
    )