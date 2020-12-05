function getPost(count) {
  const promise = $.ajax("https://jsonplaceholder.typicode.com/posts?id="+count)
  return promise
}
