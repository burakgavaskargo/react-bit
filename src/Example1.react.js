import { useState } from 'react';
import { Grid } from '@material-ui/core';
import SearchComponent from '@bit/burakgavas.react-tutorial.search-component';
import PersonCard from '@bit/burakgavas.react-tutorial.person-card';
import './App.css';
import data from './data';

function Example1() {
  const [personData, setPersonData] = useState(data);

  return (
    <>
        <SearchComponent data={data} onFinish={setPersonData} />
        
        {/* Lower container */}
        <Grid className='app-lower-container' container spacing={3}>
        {/* Data cards */}
        {
            personData.map(person =>
            <Grid key={person.id} item xs={4}>
                <PersonCard person={person} />
            </Grid>
            )
        }
        </Grid>
    </>
  );
}

export default Example1;
