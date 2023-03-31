// Get the DOM elements we need
const tagInput = document.getElementById("tag-input");
const highlightBtn = document.getElementById("highlight-btn");

// Listen for a click on the highlight button
highlightBtn.addEventListener("click", () => {
  // Send a message to the background script to highlight all instances of the specified tag
  chrome.runtime.sendMessage({ action: "copy", tag: tagInput.value }, (response) => {
    if (response.success) {
      console.log(`Highlighted all instances of the ${tagInput.value} tag.`);
    }
  });
});
