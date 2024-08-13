### To Upload a Chrome Extension Locally for Development and Testing, Follow These Steps:

1. **Clone the Repository:**

   - Clone the `BeHappiful-Chrome-Extension` repository.

2. **Install Node Modules:**

   - Run the command `npm i` to install the necessary node modules.

3. **Create a New Build:**

   - Generate a new build by running the command `npm run build`.

4. **Modify `gmailJsLoader.js`:**
   - In the `/dist/gmailJsLoader.js` file, comment out the following line of code:
     ```javascript
     <!-- // value2 = jQuery3.htmlPrefilter(value2); -->
     ```

### 5. **Open Chrome Extensions Page:**

- Open Chrome and navigate to the Extensions page by entering the following URL in the address bar:
  ```plaintext
  chrome://extensions/
  ```
- Alternatively, access it through the menu:
  - Click on the three vertical dots (⋮) in the top-right corner.
  - Go to "More tools" > "Extensions."

### 6. **Enable Developer Mode:**

- On the Extensions page, enable _Developer mode_ by toggling the switch in the top-right corner.

### 7. **Load Unpacked Extension:**

- Once Developer mode is enabled, additional buttons will appear.
- Click on the _"Load unpacked"_ button.
- A file dialog will open. Browse to the root folder of your Chrome extension (the directory containing `manifest.json`), and select it.

### 8. **Test Your Extension:**

- After selecting the directory, Chrome will load your extension. It should appear on the Extensions page with its name, description, and any errors or warnings.
- You can now test your extension by clicking on its icon (if it has one) in the toolbar or by navigating to the relevant pages where it should be active.
