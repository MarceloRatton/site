import React from 'react'

import Topbar from '../../components/Topbar'
import Title from '../../components/Title'
import Footbar from '../../components/Footbar'
import Contend from '../../components/Contend';

export default function Home() {
    return (
        <div className="Home">
            <Title title="Desenvolvimento de Soluções WEB" />
            <Topbar />
            <Contend />
            <Footbar />
        </div>
    );
}
