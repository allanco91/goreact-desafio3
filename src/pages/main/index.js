import React from 'react';

import Map from '../../components/Map';
import DevList from '../../components/Devlist';
import Modal from '../../components/Modal';

require('dotenv').config();

const Main = () => (
  <>
    <Map />
    <DevList />
    <Modal />
  </>
);

export default Main;
