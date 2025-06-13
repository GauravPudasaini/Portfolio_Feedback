import "./BrowseButton.css";
import { useNavigate } from 'react-router-dom';

const BrowseButton = ({ setPdfUrl }) => {
  const navigate = useNavigate();

  const browseResume = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataurl = reader.result;
      localStorage.setItem('pdfData', dataurl);
      setPdfUrl(dataurl);
      navigate('/portfolio-feedback');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={browseResume} />
    </div>
  );
};

export default BrowseButton;
