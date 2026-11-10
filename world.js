document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('country');
  var result = document.getElementById('result');

  function search(lookup) {
    var url = 'world.php?country=' + encodeURIComponent(input.value.trim());
    if (lookup) {
      url += '&lookup=' + lookup;
    }
    fetch(url)
      .then(function (response) { return response.text(); })
      .then(function (html) { result.innerHTML = html; })
      .catch(function () { result.textContent = 'Something went wrong, try again.'; });
  }

  document.getElementById('lookup').addEventListener('click', function () {
    search();
  }); 
  document.getElementById('lookup-cities').addEventListener('click', function () {
    search('cities'); 
  });
});