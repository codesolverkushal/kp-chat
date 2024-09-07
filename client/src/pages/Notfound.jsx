import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
        <img 
          src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" 
          alt="404 Monkey" 
          className="w-48 mx-auto mb-6"
        />
        <Typography variant="h6" className="text-gray-600 mb-4">
          This page isn't available. Sorry about that.
        </Typography>
        <Typography variant="body1" className="text-gray-500 mb-6">
          Try going back to the homepage.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleGoBack}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full"
        >
          Go back Home
        </Button>
      </div>
    </div>
  );
};

export default Notfound;


// https://us.123rf.com/450wm/mamun25g/mamun25g2104/mamun25g210400720/167497007-kp-letter-logo-design-on-black-background-kp-creative-initials-letter-logo-concept-kp-letter-design.jpg?ver=6%22