import {useState} from 'react';
import './App.css';

const App = ({ books }) => {
  return (
    <section>
      {books.map((books) => (
        <div className="bookie-boxy">
          <div>
            <h2>{books.title}</h2>
            <h3>{books.author}</h3>
          </div>
        </div>
      ))
      }
    </section>
  );
}

export default App;
