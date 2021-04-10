fetch('data.json')
    .then(response => response.json())
    .then(json => window.data = json)