// document.addEventListener("DOMContentLoaded", () => {
//   const quotesList = document.getElementById("quotesList");
//   const loader = document.getElementById("loader");

//   if (!loader) {
//     console.error("Loader element not found");
//     return;
//   }

//   async function fetchQuotes() {
//     loader.style.display = "block"; // Show the loader
//     try {
//       const response = await fetch(
//         "https://quoteapi-pqdj2k4rka-ue.a.run.app/api/auth/usedSignatures"
//       );
//       const result = await response.json();
//       if (result.success) {
//         const quotes = result.data;

//         // Load saved states or set default state
//         chrome.storage.local.get("toggleStates", (stored) => {
//           let toggleStates = stored.toggleStates || {};

//           // Create a set of current IDs from the API
//           const currentIds = new Set(quotes.map((quote) => quote.id));

//           // Remove keys not present in the current list of quotes
//           for (const id in toggleStates) {
//             if (!currentIds.has(parseInt(id))) {
//               delete toggleStates[id];
//             }
//           }

//           // Add new IDs to the toggleStates
//           quotes.forEach((quoteObj) => {
//             if (!(quoteObj.id in toggleStates)) {
//               toggleStates[quoteObj.id] = true; // Initialize new IDs to true
//             }
//           });

//           // Save updated toggleStates to storage
//           chrome.storage.local.set({ toggleStates });

//           // Render quotes and toggles
//           quotes.forEach((quoteObj) => {
//             const listItem = document.createElement("li");

//             const quoteContent = document.createElement("span");
//             quoteContent.innerHTML = quoteObj.quote;

//             const toggleContainer = document.createElement("div");
//             toggleContainer.className = "toggle-container";

//             const toggleInput = document.createElement("input");
//             toggleInput.type = "checkbox";
//             toggleInput.className = "toggle-input";
//             toggleInput.id = `toggle-${quoteObj.id}`;
//             toggleInput.checked = toggleStates[quoteObj.id];

//             const toggleLabel = document.createElement("label");
//             toggleLabel.className = "toggle-label";
//             toggleLabel.setAttribute("for", toggleInput.id);

//             toggleInput.addEventListener("change", () => {
//               const newState = toggleInput.checked;
//               chrome.storage.local.get("toggleStates", (stored) => {
//                 const toggleStates = stored.toggleStates || {};
//                 toggleStates[quoteObj.id] = newState;
//                 chrome.storage.local.set({ toggleStates }, () => {
//                   // Send a message to the background script to refresh the page
//                   chrome.runtime.sendMessage({ action: "refreshPage" });
//                 });
//               });
//             });

//             toggleContainer.appendChild(toggleInput);
//             toggleContainer.appendChild(toggleLabel);

//             listItem.appendChild(quoteContent);
//             listItem.appendChild(toggleContainer);

//             quotesList.appendChild(listItem);
//           });
//         });
//       } else {
//         console.error("Failed to fetch quotes:", result.msg);
//       }
//     } catch (error) {
//       console.error("Error fetching quotes:", error);
//     } finally {
//       loader.style.display = "none"; // Hide the loader after data is processed
//     }
//   }

//   fetchQuotes();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const quotesList = document.getElementById("quotesList");
//   const loader = document.getElementById("loader");

//   if (!loader) {
//     console.error("Loader element not found");
//     return;
//   }

//   async function fetchQuotes() {
//     loader.style.display = "block"; // Show the loader
//     try {
//       const response = await fetch(
//         "https://quoteapi-pqdj2k4rka-ue.a.run.app/api/auth/usedSignatures"
//       );
//       const result = await response.json();
//       if (result.success) {
//         const quotes = result.data;

//         // Sort quotes by used_date
//         quotes.sort((a, b) => new Date(a.used_date) - new Date(b.used_date));

//         // Load saved states or set default state
//         chrome.storage.local.get("toggleStates", (stored) => {
//           let toggleStates = stored.toggleStates || {};
//           console.log("toggleStates-->", toggleStates);
//           // Create a set of current IDs from the API
//           const currentIds = new Set(quotes.map((quote) => quote.id));

//           // Remove keys not present in the current list of quotes
//           for (const id in toggleStates) {
//             if (!currentIds.has(parseInt(id))) {
//               delete toggleStates[id];
//             }
//           }

//           // Add new IDs to the toggleStates
//           quotes.forEach((quoteObj) => {
//             if (!(quoteObj.id in toggleStates)) {
//               toggleStates[quoteObj.id] = true; // Initialize new IDs to true
//             }
//           });

//           // Save updated toggleStates to storage
//           chrome.storage.local.set({ toggleStates });

//           let lastDateCategory = "";
//           // Render quotes and toggles
//           quotes.forEach((quoteObj, index) => {
//             let dateCategory = quoteObj.used_date;

//             // Create a new heading if the category changes
//             if (dateCategory !== lastDateCategory) {
//               const heading = document.createElement("h3");
//               heading.textContent = dateCategory;
//               quotesList.appendChild(heading);
//               lastDateCategory = dateCategory;
//             }

//             const listItem = document.createElement("li");

//             const quoteContent = document.createElement("span");
//             quoteContent.innerHTML = quoteObj.quote;

//             const toggleContainer = document.createElement("div");
//             toggleContainer.className = "toggle-container";

//             const toggleInput = document.createElement("input");
//             toggleInput.type = "checkbox";
//             toggleInput.className = "toggle-input";
//             toggleInput.id = `toggle-${quoteObj.id}`;
//             toggleInput.checked = toggleStates[quoteObj.id];

//             const toggleLabel = document.createElement("label");
//             toggleLabel.className = "toggle-label";
//             toggleLabel.setAttribute("for", toggleInput.id);

//             toggleInput.addEventListener("change", () => {
//               const newState = toggleInput.checked;
//               chrome.storage.local.get("toggleStates", (stored) => {
//                 const toggleStates = stored.toggleStates || {};
//                 toggleStates[quoteObj.id] = newState;
//                 chrome.storage.local.set({ toggleStates }, () => {
//                   // Send a message to the background script to refresh the page
//                   chrome.runtime.sendMessage({ action: "refreshPage" });
//                 });
//               });
//             });

//             toggleContainer.appendChild(toggleInput);
//             toggleContainer.appendChild(toggleLabel);

//             listItem.appendChild(quoteContent);
//             listItem.appendChild(toggleContainer);

//             quotesList.appendChild(listItem);
//           });
//         });
//       } else {
//         console.error("Failed to fetch quotes:", result.msg);
//       }
//     } catch (error) {
//       console.error("Error fetching quotes:", error);
//     } finally {
//       loader.style.display = "none"; // Hide the loader after data is processed
//     }
//   }

//   fetchQuotes();
// });


document.addEventListener("DOMContentLoaded", () => {
  const quotesList = document.getElementById("quotesList");
  const loader = document.getElementById("loader");

  if (!loader) {
    console.error("Loader element not found");
    return;
  }

  async function fetchQuotes() {
    loader.style.display = "block"; // Show the loader
    try {
      const response = await fetch(
        "https://quoteapi-pqdj2k4rka-ue.a.run.app/api/auth/usedSignatures"
      );
      const result = await response.json();
      if (result.success) {
        const quotes = result.data;

        // Sort quotes by used_date
        quotes.sort((a, b) => new Date(a.used_date) - new Date(b.used_date));

        // Load saved states or set default state
        chrome.storage.local.get("toggleStates", (stored) => {
          let toggleStates = stored.toggleStates || {};

          // Create a set of current IDs from the API
          const currentIds = new Set(quotes.map((quote) => quote.id));

          // Remove keys not present in the current list of quotes
          for (const id in toggleStates) {
            if (!currentIds.has(parseInt(id))) {
              delete toggleStates[id];
            }
          }

          // Add new IDs to the toggleStates
          quotes.forEach((quoteObj) => {
            if (!(quoteObj.id in toggleStates)) {
              toggleStates[quoteObj.id] = true; // Initialize new IDs to true
            }
          });

          // Save updated toggleStates to storage
          chrome.storage.local.set({ toggleStates });

          let lastDateCategory = "";
          // Render quotes and toggles
          quotes.forEach((quoteObj, index) => {
            let dateCategory = "";
            if (index === 0) {
              dateCategory = "Today";
            } else if (index === 1) {
              dateCategory = "Tomorrow";
            } else {
              dateCategory = quoteObj.used_date;
            }

            // Create a new heading if the category changes
            if (dateCategory !== lastDateCategory) {
              const heading = document.createElement("h3");
              heading.textContent = dateCategory;
              quotesList.appendChild(heading);
              lastDateCategory = dateCategory;
            }

            const listItem = document.createElement("li");

            const quoteContent = document.createElement("span");
            quoteContent.innerHTML = quoteObj.quote;

            const toggleContainer = document.createElement("div");
            toggleContainer.className = "toggle-container";

            const toggleInput = document.createElement("input");
            toggleInput.type = "checkbox";
            toggleInput.className = "toggle-input";
            toggleInput.id = `toggle-${quoteObj.id}`;
            toggleInput.checked = toggleStates[quoteObj.id];

            const toggleLabel = document.createElement("label");
            toggleLabel.className = "toggle-label";
            toggleLabel.setAttribute("for", toggleInput.id);

            toggleInput.addEventListener("change", () => {
              const newState = toggleInput.checked;
              chrome.storage.local.get("toggleStates", (stored) => {
                const toggleStates = stored.toggleStates || {};
                toggleStates[quoteObj.id] = newState;
                chrome.storage.local.set({ toggleStates }, () => {
                  // Send a message to the background script to refresh the page
                  chrome.runtime.sendMessage({ action: "refreshPage" });
                });
              });
            });

            toggleContainer.appendChild(toggleInput);
            toggleContainer.appendChild(toggleLabel);

            listItem.appendChild(quoteContent);
            listItem.appendChild(toggleContainer);

            quotesList.appendChild(listItem);
          });
        });
      } else {
        console.error("Failed to fetch quotes:", result.msg);
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      loader.style.display = "none"; // Hide the loader after data is processed
    }
  }

  fetchQuotes();
});
