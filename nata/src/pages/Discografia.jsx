// src/pages/Discografia.jsx
import React from 'react';
import './Discografia.css';

const Discografia = () => {
  return (
    <div>
      <div className="banner">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e13ee90-287e-4461-94c6-14c60b094e0d/dgb4cy0-0d022b9c-0ba9-481c-8f7a-0752731040fa.png/v1/fill/w_855,h_935/corridos_tumbado_logo_by_jcarlosgmzgtz_dgb4cy0-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM5OSIsInBhdGgiOiJcL2ZcLzhlMTNlZTkwLTI4N2UtNDQ2MS05NGM2LTE0YzYwYjA5NGUwZFwvZGdiNGN5MC0wZDAyMmI5Yy0wYmE5LTQ4MWMtOGY3YS0wNzUyNzMxMDQwZmEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZrKvyrgJWYijPUdK3L8HIMF4bvHYC6YNFDX4RtCYmcA"
          alt="Banner"
          className="banner-img"
        />
      </div>
      <div className="page-title">Discografía</div>
      <div className="content">
        <div className="album">
          <div className="text">
            <div className="title">Nata Montana</div>
            <div className="description">
              <p>El nuevo álbum de Natanael Cano, ‘Nata Montana’, toma inspiración de la icónica película ‘Tony Montana’. La portada del disco incluso presenta el famoso dirigible que aparece en la película con la frase ‘El mundo es tuyo’, lo que sugiere que el álbum está lleno de ambición y determinación.</p>
              <p>Este material musical cuenta con 16 canciones, 3 de ellas, ‘AMG’, ‘Como es arriba es abajo’ y ‘Pacas de billetes’, ya salieron en las plataformas digitales y son todo un éxito. Las otras 13 son aún un misterio, algunas de ellas son cantadas en solitario y otras tienen colaboraciones con grandes cantantes como: Gabito Ballesteros, Tito Torbellino Jr., Hernán Trejo, Amilkar, Luis R Conriquez, Junior H, Peso Pluma, entre otros.</p>
              <p>Tracklist</p>
              <p>1. Cuerno Azulado</p>
              <p>2. Diran De Mi</p>
              <p>3. Mas Altas Que Bajadas</p>
              <p>4. La Lokerona</p>
              <p>5. Un Convoy</p>
              <p>6. Pancake</p>
              <p>7. Viejo Lobo</p>
              <p>8. AFS</p>
              <p>9. Eres</p>
              <p>10. Mi Bello Angel</p>
              <p>11. En Corto</p>
              <p>12. AMG</p>
              <p>13. Como Es Arriba Es Abajo</p>
              <p>14. Pacas De Billetes</p>
              <p>15. Dando Y Dando</p>
              <p>16. Ghini</p>
            </div>
            <a href="https://open.spotify.com/album/507VZINfvVEAyrcPbJuOVU?si=r1_Q9asiSd-DsqmS_XIpnQ" className="listen-button">Escuchar</a>
          </div>
          <img src="https://es.rollingstone.com/wp-content/uploads/2023/06/Escucha-Nata-Montana-el-nuevo-album-de-Natanael-Cano-1.jpg" alt="Nata Montana" className="album-img" />
        </div>
        <div className="album reverse">
          <div className="text">
            <div className="title">Nata Kong</div>
            <div className="description">
              <p>Natanael Cano presentó a inicios de abril su producción "NATAKONG", el disco más personal de su carrera, dice, y en el que quiso dejar a sus seguidores queriendo más del género asociado con su nombre: los corridos tumbaos.</p>
              <p>La producción, que consta de 18 temas, entró este miércoles al top 10 del chart Latin Rhythm Album de Billboard, y es la producción que lleva también al escenario del Festival Musical Coachella, que se lleva a cabo en Indio, California. Esta es la primera vez que Cano llega al evento.</p>
              <p>Tracklist</p>
              <p>1. Free Nata</p>
              <p>2. Kong</p>
              <p>3. Lio</p>
              <p>4. Tay</p>
              <p>5. Estrellas</p>
              <p>6. Dinero Digital (feat. Badgyuchapo)</p>
              <p>7. De A De Veras (feat. Codiciado)</p>
              <p>8. Gracias A Dios (feat. Lil Mosey)</p>
              <p>9. Quien Va A Caer (feat. Tyan G)</p>
              <p>10. Toronto</p>
              <p>11. Cuento</p>
              <p>12. Brillo</p>
              <p>13. Mochila (feat. Junior H)</p>
              <p>14. Madrid</p>
              <p>15. Periquito</p>
              <p>16. Traigo Ganas</p>
              <p>17. Me Gusta</p>
            </div>
            <a href="https://open.spotify.com/album/2irmTvrbuG1ox2Qa6R8J1L?si=L0vgYIW0RWi_4YzuMIuMag" className="listen-button">Escuchar</a>
          </div>
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/3c/26/32/3c26323f-a8e8-844d-eccb-aa15186a461d/5054197142550.jpg/1200x1200bf-60.jpg" alt="Nata Kong" className="album-img" />
        </div>
      </div>
    </div>
  );
}

export default Discografia;
