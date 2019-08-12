import React from 'react';

const Contact = () => {
  return (
    <section id = "contacto">
      <div className="contenedor">
        
          
          <div className="formulario">
          <h3>Contacto</h3>
          <p>deja tus datos y me pondre en contacto </p><br/>
            <form action="submit" className="grid-container">
              <input type="text" placeholder="Nombre"/>
              <input type="text" placeholder="Apellido"/>
              <textarea name="descripcion" id="" cols="30" rows="10">AGREGAR TEXTO</textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;