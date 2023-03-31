document.addEventListener("DOMContentLoaded", function() {
  const extractButton = document.getElementById("extract-button");
  const tagInput = document.getElementById("tag-input");
  const output = document.getElementById("output");

  extractButton.addEventListener("click", function() {
    chrome.tabs.executeScript({
      code: `let tag = "${tagInput.value}";
             let elements = document.getElementsByTagName(tag);
             let text = "";
             for (let i = 0; i < elements.length; i++) {
               text += elements[i].textContent + "\\n";
             }
             text;`
    }, function(result) {
      output.innerText = result[0];
    });
  });
});
