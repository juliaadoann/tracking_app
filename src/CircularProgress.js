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
      <CircularProgress variant="determinate" size={280} thickness={2} {...props} />
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
          {props.value}%
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel({ rows }) {
    const [progress, setProgress] = React.useState(0);

    function countPointsCompleted() {
      let points = 0;
      for (const row of rows) {
        if (row.done) {
          points += row.point;
        }
      }
      return points;
    }

    function countTotalPoints() {
      let points = 0;
      for (const row of rows) {
        points += row.point;
      }
      return points;
    }
  
    React.useEffect(() => {
      const completedPoints = countPointsCompleted();
      const totalPoints = countTotalPoints();
      const percentage = completedPoints / totalPoints;
      setProgress(percentage.toFixed(2) * 100);
    }, [JSON.stringify(rows)]);
  
    return <CircularProgressWithLabel value={progress} />;
  }
