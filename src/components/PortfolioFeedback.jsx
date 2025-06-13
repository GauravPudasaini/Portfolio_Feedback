import React, { useEffect, useState } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackMessage from './FeedBackMessage';
import './PortfolioFeedback.css';
import Sidebar from './Sidebar';

const PortfolioFeedback = () => {
    const [pdfUrl, setPdfUrl] = useState(null);
//     const [SideButton, setSideButton] = useState(false)

//     const toggleSidebar  = () => {  
//     setSideButton(prev => !prev)
// }

    return (
        <div className = 'portfolio-feedback-page'style={{ display: 'flex' }}>
            <div>
             {/* <Sidebar/> */}
            </div>
            <div className="CV-styling">
                <FeedbackForm pdfUrl={pdfUrl} />
            </div>
            <div className="Feedback-styling">
                <FeedbackMessage />
            </div>
        </div>
    );
};

export default PortfolioFeedback;
