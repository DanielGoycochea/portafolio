import React from 'react';

const About = () => {
  return (
    <section id='about'>
      <div className="contenedor">
        <div className="izquierda">
          <p className="about">Quien Soy</p>
          <hr/>
          <h2>Soy Daniel</h2>
          <p className="texto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, est. Excepturi culpa maiores velit quisquam non, asperiores similique voluptate dolorum repellendus consequuntur maxime modi dolores mollitia neque ad, aliquam a!
          </p>
        </div>
        <div className="derecha">
          <img src="https://res.cloudinary.com/dzxpqumj0/image/upload/v1565322999/business-1839876_1280.jpg" alt="desarrollo" />
        </div>
      </div>
      
      
    </section>
  );
};

export default About;