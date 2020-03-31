import React from 'react';

import Title from '../../components/Title'
import Topbar from '../../components/Topbar'
import Footbar from '../../components/Footbar';
import Contend from '../../components/Contend';

export default function Sobre() {
  return (
      <div>
          <Title title="Sobre" />
          <Topbar />
          <Contend />
          <Footbar />
      </div>
  );
}
