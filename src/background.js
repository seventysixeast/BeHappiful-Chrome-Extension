// // Listen for messages from content scripts
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("message--->", message);
//   if (message.action === "getToggleStates") {
//     // Retrieve toggle states from storage and send them back
//     chrome.storage.local.get("toggleStates", (result) => {
//       console.log("result---->", result);
//       sendResponse(result.toggleStates || {});
//     });
//     // Indicate that the response will be sent asynchronously
//     return true;
//   }
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("message---->", message);
//   if (message.type === "FROM_POPUP") {
//     console.log("111111111111111111111111");
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       if (tabs.length > 0) {
//         chrome.tabs.sendMessage(tabs[0].id, message.data, (response) => {
//           sendResponse(response);
//         });
//       }
//     });

//     // Return true to indicate asynchronous response
//     return true;
//   }
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === "updateToggleStates") {
//     // Store received toggle states
//     // toggleStates = request.data;
//     console.log("Received toggle states from popup:", request.data);
//     // You can potentially send these states to the content script here
//     sendResponse({ message: "Toggle states received successfully" });

//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       console.log("tabs--->", tabs);
//       if (tabs.length > 0) {
//         console.log("tabs[0].id00--->", tabs[0].id);
//         chrome.tabs.sendMessage(tabs[0].id, {
//           action: "setToggleStates",
//           data: request.data,
//         });
//       }
//     });
//   }
// });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "refreshPage") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const tab = tabs[0];
        const urlPattern = /^https:\/\/mail\.google\.com\//;
        if (urlPattern.test(tab.url)) {
          chrome.tabs.reload(tab.id);
        }
      }
    });
  }
});

