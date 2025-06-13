  import { useEffect, useState } from 'react';
  import FeedbackForm from './components/FeedbackForm.jsx';
  import FeedbackMessage from './components/FeedBackMessage';
  import BrowseButton from './components/BrowseButton';
  import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate
  import './Home.css'


  function Home() {
      const [pdfUrl, setPdfUrl] = useState(null);
    return (
      <>
      <div className='main-container' >
        <div className= 'form-container'>
          <div className='hero'>
            <BrowseButton
              setPdfUrl={setPdfUrl}
            />
          </div>
          </div>
   
      </div>
      </>
    ) 
  }

  export default Home
