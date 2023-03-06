// fetch on localhost:8000/api/membre 
function fetchUser() {
    fetch('http://localhost:8000/api/membres')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}
fetchUser() 