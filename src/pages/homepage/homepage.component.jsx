import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

//needs to be a functional component
const HomePage = () => (
  <div className='homepage'>
    <Directory/>
  </div>
);

export default HomePage;
