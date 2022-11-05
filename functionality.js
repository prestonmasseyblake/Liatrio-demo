const url = window.location.hostname;
document.getElementById("url_name").innerHTML = '"http://' + url + '/"';
function copyToClipboard() {
  console.log("clicked this func");
  navigator.clipboard.writeText(
    `fetch("http://${url}/").then((response) => 
                response.json()).then((data)=>console.log(data));`
  );
  document.getElementById("tooltiptext").innerHTML = "Copied!";
}
