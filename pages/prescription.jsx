import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Prescription = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const handleInputChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type.includes('image')) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Please select a valid image file (JPG, PNG, GIF)');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if file is selected
    if (file) {
      // Perform image upload logic here (e.g. using an API endpoint)
      // ...

      // Display success message
      setSuccess('Image successfully uploaded!');

      // Redirect to home page after a short delay
      setTimeout(() => {
        router.push('/shop');
      }, 2000);
    } else {
      setError('Please select an image file to upload');
    }
  };

  return (
    <div>
      <div className="metapharm-contact-us">
      <div className="contact-us-container">
        <div className="contact-row">
          <div className="conatct-col-md-12">
            <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li> 
              <li className="active">Prescription</li>
            </ol>
          </div>
          <div className="contact-us-col-md-12"><h1>Prescription</h1></div>
        </div>
      </div>
    </div>
    <div className="upload-image-container">
      <h1 className="upload-image-title">Upload Image</h1>
      <form onSubmit={handleSubmit} className="upload-image-form">
        <div className="upload-image-input-container">
          <label htmlFor="file-input" className="upload-image-label">Select an image file:</label>
          <input type="file" id="file-input" onChange={handleInputChange} className="upload-image-input" />
          {error && <div className="upload-image-error">{error}</div>}
          {success && <div className="upload-image-success">{success}</div>}
        </div>
        <button type="submit" className="upload-image-button">Upload</button>
      </form>
    </div>
    </div>
  );
};

export default Prescription;