import { useState } from "react";

export default function Main() {
  const [somme, setSomme] = useState(90700);
  const [peinture, setPeinture] = useState(0);
  const [car1, setCar1] = useState("selected");
  const [car2, setCar2] = useState();
  const [paint1, setPaint1] = useState("selected");
  const [paint2, setPaint2] = useState();

  return (
    <main>
      <h2>Model Y</h2>
      <section>
        <h3>Séléctionner votre véhicule</h3>
        <div
          className={`select ${car1}`}
          onClick={() => {
            setCar1("selected");
            setCar2();
            setSomme(90700 + peinture);
          }}
        >
          Grande Autonomie - 90 700 €
        </div>
        <div
          className={`select ${car2}`}
          onClick={() => {
            setCar1();
            setCar2("selected");
            setSomme(106700 + peinture);
          }}
        >
          Performanc - 106 700 €
        </div>
        <h3>Séléctionner la couleur</h3>
        <div
          className={`select ${paint1}`}
          onClick={() => {
            setPaint1("selected");
            setPaint2();
            setPeinture(0);
          }}
        >
          Blanc Nacré Multicouches - 0 €
        </div>
        <div
          className={`select ${paint2}`}
          onClick={() => {
            setPaint1();
            setPaint2("selected");
            setPeinture(1000);
          }}
        >
          Noir Uni - 1 000 €
        </div>
        <div>
          <p className="somme">{somme}€</p>
          <div className="buy">Acheter</div>
        </div>
      </section>
      <div>
        <div>
          <p>2100 +</p>
          <p>litres de capacité de chargement</p>
        </div>
        <div>
          <p>533 km</p>
          <p>Automonie (WLTP)</p>
        </div>
        <div>
          <p>AWD</p>
          <p>Dual Motor</p>
        </div>
        <div>Commander</div>
      </div>
    </main>
  );
}
