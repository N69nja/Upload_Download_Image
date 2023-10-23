# Upload_Download_Image

**Server Side:**
- The server side code is implemented using Flask, a Python web framework.
- It includes routes for handling HTTP requests:
  - `/`: Returns a simple "hello" message as a response.
  - `/upload`: Handles file upload requests. It expects the `name` and `image` fields in the form data. It generates a unique code for the uploaded file, saves the file in the `upload` directory, and sends a POST request to the JSON server at `http://localhost:3000/images` with the file information.
  - `/check`: Handles file download requests. It expects the `code` field in the form data. It sends a GET request to the JSON server at `http://localhost:3000/images` with the code as a parameter. If the file is found in the JSON server's response, it retrieves the file and sends it as a response using the `send_file` function.

**Client Side:**
- The client side code is implemented using React.
- It includes a main `App` component that manages the state for the upload and download functionality.
- It renders two buttons, "Upload" and "Download", which toggle the visibility of the corresponding components.
- The `Upload` component is rendered when the "Upload" button is clicked. It allows the user to enter a code and submit a form to upload a file.
- The `Download` component is rendered when the "Download" button is clicked. It allows the user to enter a code and submit a form to download a file.
- The `Download` component displays the downloaded file as an image if it exists.

**Components:**
- The `Upload` component handles the file upload functionality. It includes an input field for entering a code and a submit button.
- The `Download` component handles the file download functionality. It includes an input field for entering a code and a submit button. If a file is found with the entered code, it displays a "Download" link and the file as an image.

Please note that the code assumes the presence of a JSON server running at `http://localhost:3000` and expects the server-side code to be running on `http://localhost:5000`. Make sure to update the URLs accordingly if needed.
