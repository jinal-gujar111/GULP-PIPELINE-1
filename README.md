
  Purpose:

  This project is a web application that demonstrates the use of Gulp for optimizing and processing
  multiple sets of CSS, JS, and HTML files. Here's the purpose of each file:

  File Descriptions:

  - `src/clock1.css` and `src/clock2.css`:
    - `clock1.css` and `clock2.css` are two different CSS stylesheets. They serve different design
      purposes or themes for the web application.

  - `src/clock1.js` and `src/clock2.js`:
    - `clock1.js` and `clock2.js` are JavaScript files that contain the logic for two different
      versions or variations of a clock application.

  - `src/index.html`:
    - `index.html` is the main entry point of the web application. It provides the structure and
      layout for the web page, references the CSS and JavaScript files, and sets up the user interface
      for the clock application. The HTML file likely contains options for users to select between
      the different CSS and JavaScript variations.

  - `dist` Directory:
    - The `dist` directory serves as the destination for the processed and optimized files. Gulp tasks
      are configured to copy the HTML file, concatenate and minify the CSS and JS files, and place the
      resulting files in this directory. The final `index.html` in the `dist` directory references the
      minified and concatenated CSS and JS files, making the application more efficient for deployment.

  Getting Started:

  To build and run the project, follow these steps:

  1. Install Node.js if you haven't already. You can download it from [the official Node.js website](https://nodejs.org/).

  2. Install Gulp globally by running the following command in your terminal or command prompt:

      ```bash
      npm install -g gulp
      ```

  3. Navigate to the project's root directory using the terminal or command prompt:

      ```bash
      cd path/to/your/project
      ```

      Replace path/to/your/project with the actual path to your project directory.

  4. Install project dependencies by running:

      ```bash
      npm install
      ```

      This command installs the necessary Node.js modules, including Gulp and its plugins, as specified
      in the package.json file.

  5. Run the default Gulp task to process and optimize the files:

      ```bash
      gulp
      ```

      This command will execute the default Gulp task, which is typically configured to perform tasks
      like copying the HTML file, concatenating and minifying CSS and JS files, and placing the processed
      files into the dist directory.

  After running these steps, you should find the optimized and processed files in the dist directory.
  You can then open dist/index.html in a web browser to see the web application with the optimized CSS
  and JS files.

  Note: Make sure to check the gulpfile.js in your project directory for the specific Gulp tasks and
  configurations used in your project. Adjustments can be made there if needed.

