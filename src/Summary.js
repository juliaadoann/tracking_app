import React, { useState } from 'react';
import Table from './Table'; // Assuming the actual path to your Table component
import CircularWithValueLabel from './CircularProgress'; // Assuming the actual path to your CircularProgress component

function createData(id, name, point, done) {
  return {
    id,
    name,
    point,
    done
  };
}

const Summary = () => {
  const [rows, setRows] = useState([
    createData(1, "As a user, I want to have a distinct username.", 3, false),
    createData(2, "As a potential customer, I want to read book reviews so that I can decide which one to buy.", 2, false),
    createData(3, "As a user, I want to be able to cancel my reservation at any time.", 13, false),
    createData(4, "As a user, I want to view my statement balance.", 8, false),
    createData(5, "As a user, I want to hknow all my tasks in advance.", 5, false),
    createData(6, "As a user, I want to get a weekly repport of content analytics.", 1, false),
    createData(7, "As a user, I want to be able to configure settings so that I an control access.", 1, false),
    createData(8, "As a user, I want to see photos of the products.", 2, false),
    createData(9, "As a user, I want to reorder a past order.", 3, false),
    createData(10, "As a user, I want to be notifiied about new products.", 5, false),
    createData(11, "As a user, I want to filter my products by category.", 3, false),
    createData(12, "As a user, I want to collect loyalty points.", 8, false),
    createData(13, "As a user, I want to redeem loyalty points.", 13, false),
  ]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Top half: Table */}
      <div style={{ marginBottom: '40px'}}>
        <Table rows={rows} setRows={setRows} createData={createData}/>
      </div>

      {/* Bottom half: CircularProgress */}
      <div>
        <CircularWithValueLabel rows={rows}/>
      </div>
    </div>
  );
};

export default Summary;
