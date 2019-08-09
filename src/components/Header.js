import React from 'react';


const Header = () => {
  return (
    <header>
      <div className="menu">
        <div className="contenedor">
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
        </div>

      </div>
   
    </header>
  );
};

export default Header;