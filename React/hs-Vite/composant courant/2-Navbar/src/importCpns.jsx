// import React from 'react';

// // fonction pour importer dynamiquement les composants
// const importComponent = (name) => import(`./components/${name}`);

// class App extends React.Component {
//   state = {
//     components: [],
//   };

//   componentDidMount() {
//     // requête AJAX pour récupérer le tableau de composants
//     fetch('https://exemple.com/api/components')
//       .then((response) => response.json())
//       .then((data) => {
//         // pour chaque nom de composant dans le tableau, importer le composant
//         const promises = data.map((name) => importComponent(name));
//         Promise.all(promises).then((components) => {
//           // mettre à jour l'état avec les composants importés
//           this.setState({ components });
//         });
//       });
//   }

//   render() {
//     const { components } = this.state;

//     return (
//       <div>
//         {components.map((Component, index) => (
//           <Component key={index} />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';

// fonction pour importer dynamiquement les composants
const importComponent = (name) => import(`./components/${name}`);

class App extends React.Component {
  state = {
    components: [],
  };

  async componentDidMount() {
    // requête AJAX pour récupérer le tableau de composants
    const response = await fetch('https://exemple.com/api/components');
    const data = await response.json();
    
    // pour chaque nom de composant dans le tableau, importer le composant
    const promises = data.map((name) => importComponent(name));
    const components = await Promise.all(promises);
    
    // mettre à jour l'état avec les composants importés
    this.setState({ components });
  }

  render() {
    const { components } = this.state;

    return (
      <div>
        {components.map((Component, index) => (
          <Component key={index} />
        ))}
      </div>
    );
  }
}

export default App;
