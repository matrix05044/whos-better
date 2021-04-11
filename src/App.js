import './App.css';
import Card from './Components/Card/Card';
import { useState, useEffect } from 'react';
import Form from './Components/Form/Form';

function App() {
  const [girls, setGirls] = useState([
    {
      id: 0,
      name: 'Teri Hatcher',
      img: 'https://www.randomlists.com/img/people/teri_hatcher.webp',
    },
    {
      id: 1,
      name: 'Angelina Jolie',
      img: 'https://www.randomlists.com/img/people/angelina_jolie.webp',
    },
    {
      id: 2,
      name: 'Liv Tyler',
      img: 'https://www.randomlists.com/img/people/liv_tyler.webp',
    },
    {
      id: 3,
      name: 'Natalie Portman',
      img: 'https://www.randomlists.com/img/people/natalie_portman.webp',
    },
    {
      id: 4,
      name: 'Nicole Kidman',
      img: 'https://www.randomlists.com/img/people/nicole_kidman.webp',
    },
    {
      id: 5,
      name: 'Emma Watson',
      img: 'https://www.randomlists.com/img/people/emma_watson.webp',
    },
    {
      id: 6,
      name: 'Anne Frank',
      img: 'https://www.randomlists.com/img/people/anne_frank.webp',
    },
    {
      id: 7,
      name: 'Venus Williams',
      img: 'https://www.randomlists.com/img/people/venus_williams.webp',
    },
    {
      id: 8,
      name: 'Britney Spears',
      img: 'https://www.randomlists.com/img/people/britney_spears.webp',
    },
    {
      id: 9,
      name: 'Lady Gaga',
      img: 'https://www.randomlists.com/img/people/lady_gaga.webp',
    },
    {
      id: 10,
      name: 'Amelia Earhart',
      img: 'https://www.randomlists.com/img/people/amelia_earhart.webp',
    },
    {
      id: 11,
      name: 'Taylor Swift',
      img: 'https://www.randomlists.com/img/people/taylor_swift.webp',
    },
    {
      id: 12,
      name: 'Madonna',
      img: 'https://www.randomlists.com/img/people/madonna.webp',
    },
    {
      id: 13,
      name: 'Jennifer Lopez',
      img: 'https://www.randomlists.com/img/people/jennifer_lopez.webp',
    },
    {
      id: 14,
      name: 'Matka Teresa xd',
      img: 'https://www.randomlists.com/img/people/mother_teresa.webp',
    },
    {
      id: 15,
      name: 'Catherine Zeta-Jones',
      img: 'https://www.randomlists.com/img/people/catherine_zeta_jones.webp',
    },
    {
      id: 16,
      name: 'Katy Perry',
      img: 'https://www.randomlists.com/img/people/katy_perry.webp',
    },
    {
      id: 17,
      name: 'Anna Hathaway',
      img: 'https://www.randomlists.com/img/people/anne_hathaway.webp',
    },
    {
      id: 18,
      name: 'Kristen Stewart',
      img: 'https://www.randomlists.com/img/people/kristen_stewart.webp',
    },
  ]);

  const [left, setLeft] = useState(
    girls.slice(0, girls.length - Math.floor(girls.length / 2))
  );
  const [right, setRight] = useState(
    girls.slice(Math.ceil(girls.length / 2)).reverse()
  );

  const [move1, setMove1] = useState(0);
  const [move2, setMove2] = useState(0);

  const pick = (side) => {
    if (side === 'right') {
      setGirls(girls.filter((item) => item.id !== left[0].id));
      setMove1(move1 + 1);
    } else {
      setGirls(girls.filter((item) => item.id !== right[0].id));
      setMove2(move2 + 1);
    }
  };

  useEffect(() => {
    setLeft(girls.slice(0, girls.length - Math.ceil(girls.length / 2)));
    setRight(girls.slice(Math.ceil(girls.length / 2)).reverse());
  }, [girls]);

  const addNew = (items) => {
    const id = girls.length;
    const newGirl = { id, ...items };
    setGirls([...girls, newGirl]);
  };

  const win = (side, name) => {
    alert(`Zwyciężyła ${name}`);
  };

  return (
    <div className='App'>
      <div className='cards'>
        {girls.length > 1 ? (
          <>
            {left.slice(0, 1).map((item) => (
              <Card girls={item} key={move1} onDelete={pick} side='left' />
            ))}

            {right.slice(0, 1).map((item) => (
              <Card girls={item} key={move2} onDelete={pick} side='right' />
            ))}
          </>
        ) : (
          <>
            {girls.slice(0, 1).map((item) => (
              <Card girls={item} side='left' key={girls} onDelete={win} />
            ))}
          </>
        )}
      </div>
      <Form addNew={addNew} />
    </div>
  );
}

export default App;
