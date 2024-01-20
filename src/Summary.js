import React from 'react';
import Table from './Table'; // Assuming the actual path to your Table component
import CircularWithValueLabel from './CircularProgress'; // Assuming the actual path to your CircularProgress component

const Summary = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Top half: Table */}
      <div style={{ flex: 1 }}>
        <Table />
      </div>

      {/* Bottom half: CircularProgress */}
      <div style={{ flex: 1 }}>
        <CircularWithValueLabel />
      </div>
    </div>
  );
};

export default Summary;
