import React from 'react';

import Title from '../../components/Title';
import Topbar from '../../components/Topbar';
import Footbar from '../../components/Footbar';
import Contend from '../../components/Contend';

// import { Container } from './styles';

export default function Projetos() {
  return (
      <div>
          <Title title="Projetos" />
          <Topbar />
          <Contend />
          <Footbar />
      </div>
  );
}
