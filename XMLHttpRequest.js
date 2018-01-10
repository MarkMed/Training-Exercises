var req = new XMLHttpRequest();
function reqListener(){
    console.log(this.responseText);
}
req.addEventListener("load", reqListener);
req.open("GET", "https://jsonplaceholder.typicode.com/posts");
req.send();