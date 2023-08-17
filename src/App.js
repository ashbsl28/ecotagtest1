import React from 'react';
import './App.css';
import Menu from './components/Menu';

const menuData = [
    { id: 1, name: 'Artichoke', price: 10.99, img: 'path_to_image.jpg' },
    { id: 2, name: 'Bacon', price: 8.99, img: 'path_to_image.jpg' },
    { id: 3, name: 'Cucumber', price: 7.99, img: 'path_to_image.jpg' },
    // ... add more items as needed
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Bruncherie Menu</h1>
            </header>
            <Menu items={menuData} />
        </div>
    );
}

export default App;
