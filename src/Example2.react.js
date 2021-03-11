import { useState } from 'react';
import { Grid } from '@material-ui/core';
import Typeahead from '@bit/burakgavas.react-tutorial.typeahead';
import CustomTable from '@bit/burakgavas.react-tutorial.custom-table';
import './App.css';
import data from './data';

function Example2() {
  const convertObjectsToArray = (objectArray) => {
    return objectArray.map(elem => ([
      elem.name,
      elem.surname,
      elem.age,
    ]));
  }

  const [personData, setPersonData] = useState(convertObjectsToArray(data));

  return (
    <>
      {/* Search */}
      <Grid container spacing={3}>
        <Grid item xs={4}>
            <Typeahead
              data={data}
              label='Search People'
              onFinish={data => setPersonData(convertObjectsToArray(data))}
            />
        </Grid>
      </Grid>

      {/* Table */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CustomTable
            columns={['Name', 'Surname', 'Age']}
            rows={personData}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Example2;
