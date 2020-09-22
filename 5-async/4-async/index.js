async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  // end -->
  const response = await fetch(url);
  const result = await response.json();
  document.writeln(result.name);
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
