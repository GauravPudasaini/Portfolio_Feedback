import { useEffect, useState } from 'react';
import './FeedbackForm.css';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.mjs`;

const FeedbackForm = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState();
  const [localPdfUrl, setLocalPdfUrl] = useState(null);


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  useEffect(() => {
    const stored = localStorage.getItem("pdfData");
    if (stored) {
      setLocalPdfUrl(stored);
    }
  }, []);
  return (
    <div className="portfoli-container">
      {localPdfUrl && (
        <Document file={localPdfUrl} onLoadSuccess={onDocumentLoadSuccess} >
          {Array.from(new Array(numPages), (_, index) => (
            <div key={`page_${index + 1}`} style={{ marginBottom: '20px' }}>
              <Page pageNumber={index + 1} scale={2} width={450} renderMode="canvas" />
            </div>
          ))}
        </Document>
      )}
    </div>
  );
};

export default FeedbackForm;

// import { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/pdfjs-express-viewer';
// import './FeedbackForm.css';

// const FeedbackForm = ({ pdfUrl }) => {
//   const viewerRef = useRef(null);

//   useEffect(() => {
//     if (!pdfUrl) return;

//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: pdfUrl,
//         licenseKey: '',
//       },
//       viewerRef.current
//     );
//   }, [pdfUrl]);

//   return (
//     <div className="portfoli-container">
//       {pdfUrl && <div ref={viewerRef} style={{ height: '100vh', width: '100%' }} />}
//     </div>
//   );
// };

// export default FeedbackForm;
