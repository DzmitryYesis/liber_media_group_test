import React from 'react';
import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {FixedHeader} from './components/FixedHeader/FixedHeader';

function App() {
    return (
        <div>
            <FixedHeader/>
            <Header/>
            <Footer/>
        </div>
    );
}

export default App;
