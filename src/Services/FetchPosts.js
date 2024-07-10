export default function FetchPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
   .FetchPost=response;
   console.log(FetchPost);
    return response;
    
}