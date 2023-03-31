// This code runs on the active tab when the extension is clicked

// Get the tag name entered by the user
chrome.storage.sync.get('tag', function(data) {
  let tagName = data.tag;

  // Get all elements with the specified tag name
  let elements = document.getElementsByTagName(tagName);

  // Highlight each element and add click event listener
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    element.style.backgroundColor = '#FFFF00';
    element.addEventListener('click', function() {
      // Copy the text content to the clipboard
      let text = element.innerText;
      navigator.clipboard.writeText(text);
      // Notify the user that the text has been copied
      let notification = new Notification('Text Copied', {
        body: 'The text has been copied to the clipboard.',
        icon: 'icon.png'
      });
      setTimeout(() => {
        notification.close();
      }, 2000);
    });
  }
});
