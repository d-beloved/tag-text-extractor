chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copy") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          args: [request.tag],
          func: (tag) => {
						const texts = []
						document.querySelectorAll(tag).forEach(el => texts.push(el.textContent));
						const textToCopy = texts.join("\n");
						navigator.clipboard.writeText(textToCopy);
						console.log(`Copied text content of all <${tag}> elements to the clipboard:`);
						console.log(textToCopy);
          }
        },
        () => {
          sendResponse({ success: true });
        }
      );
    });
    return true;
  }
});