import "./Resume.css";

function Resume() {
  const handleDownloadAndPreview = () => {
    const fileUrl = "/Shivank-Resume.pdf";

    // Trigger file download
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "Shivank-Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Open in new tab for preview
    window.open(fileUrl, "_blank");
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-content">
          <h2>My Resume</h2>

          <p>
            Download my resume to learn more about my skills, experience, and qualifications. Feel free to reach out if
            you have any questions or would like to discuss potential opportunities.
          </p>

          <div className="resume-buttons">
            <button onClick={handleDownloadAndPreview} className="download-button">
              <i className="icon-download"></i>
              Download CV
            </button>

            <a href="/Shivank_Verma_resume.pdf" target="_blank" rel="noopener noreferrer" className="preview-button">
              <i className="icon-eye"></i>
              Preview CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
