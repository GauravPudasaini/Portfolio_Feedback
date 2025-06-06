import "./BrowseButton.css";

const BrowseButton = ({ setPdfUrl, setHideBrowseButton }) => {
  const browseResume = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      setHideBrowseButton(false); 
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={browseResume} />
    </div>
  );
};

export default BrowseButton;
