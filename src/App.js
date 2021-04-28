import React, { useState } from 'react';
import Data from './components/Data';
import List from './components/List';

function App() {
  const [people, setPeople ] = useState(Data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays todays</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;