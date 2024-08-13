"use strict";

if (chrome.storage && chrome.storage.local) {
  chrome.storage.local.get("toggleStates", (stored) => {
    let toggleState = stored.toggleStates || {};
    localStorage.setItem("toggleStates", JSON.stringify(toggleState));
  });
} else {
  console.log("chrome.storage API is not available.");
}

const loaderId = setInterval(() => {
  if (!window._gmailjs) {
    return;
  }
  clearInterval(loaderId);
  startExtension(window._gmailjs);
}, 100);

async function startExtension(gmail) {
  let storedToggleState = localStorage.getItem("toggleStates");
  let state = storedToggleState ? JSON.parse(storedToggleState) : {};
  window.gmail = gmail;

  gmail.observe.on("load", () => {
    const userEmail = gmail.get.user_email();
    console.log("Hello, " + userEmail + ". The extension is working");

    // Observe when a new compose or reply window is opened
    gmail.observe.on("compose", async (compose, type) => {
      console.log("New compose or reply window is opened!", compose);

      // We now handle both compose and reply types
      if (type === "compose" || type === "reply") {
        try {
          // Fetch a quote
          const response = await fetch(
            "https://quoteapi-pqdj2k4rka-ue.a.run.app/api/auth/usedSignatures"
          );
          const data = await response.json();
          let myQuote = data?.data?.[0] || "";
          console.log("myQuote:", myQuote);

          // Fetch an attribute
          const responseOfAttribute = await fetch(
            "https://quoteapi-pqdj2k4rka-ue.a.run.app/api/auth/getAttribute"
          );
          const att = await responseOfAttribute.json();
          let ancer = att?.data?.[0]?.attribute || "";

          if (myQuote && ancer) {
            // Add quote and attribute to the compose or reply body
            let toggleValue = state.hasOwnProperty(myQuote.id)
              ? state[myQuote.id]
              : null;
            if (toggleValue === true) {
              // Get current body content
              let currentBody = compose.body();

              // Append the new content
              let newContent = `${currentBody}\n\n${myQuote.quote}\n${ancer}`;
              compose.body(newContent);
            }
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    });
  });
}
