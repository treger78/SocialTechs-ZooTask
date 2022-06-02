function createZoo() {
  const root = document.getElementById('root');

  const zoo = document.createElement('div');
  
  zoo.id = 'zoo';

  root.appendChild(zoo);
}

export default createZoo;
