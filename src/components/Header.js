import React from 'react';


const Header = () => {
  return (
    <header>
      <div className="menu">
        <section className="containergrid">
          <p className="logo">Daniel Goycochea</p>
          <nav>
            <ul>
              {/* colocar liga  */}
              <li>Home</li>
              <li>Quien Soy</li>
              <li>Trabajos</li>
              <li>Contacto</li>
              <li>Otro</li>
            </ul>
          </nav>
        </section>

      </div>
   
    </header>
  );
};

export default Header;