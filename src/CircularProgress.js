import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress variant="determinate" size={300} thickness={2} {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
    const [progress, setProgress] = React.useState(10);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          // Check if progress is 100 or more
          if (prevProgress >= 100) {
            clearInterval(timer); // Stop the interval
            return 100; // Set progress to 100 and keep it there
          } else {
            return prevProgress + 10; // Otherwise, continue incrementing
          }
        });
      }, 800);
  
      return () => {
        clearInterval(timer); // Clear interval on component unmount
      };
    }, []);
  
    return <CircularProgressWithLabel value={progress} />;
  }
