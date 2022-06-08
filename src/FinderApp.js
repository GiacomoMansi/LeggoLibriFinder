import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./App.css";
const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Paperback-stack.png/220px-Paperback-stack.png";

//l'uso di una sola pagina è voluto non ho suddiviso perchè era
//un progetto per Javascript inoltre come consigliato ho usato prettier
//Grazie per tutti i feedback dati mi hanno fatto migliorare tanto lodash ho approfindito tanto


const FinderApp = () => {
  const [books, setBooks] = useState([]); //variabile book che corrisponde ad un array vuoto
  const [input, setInput] = useState(" "); //variabile che mi aiuta per prendere il valore dall'input
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + input;
  console.log(url);

  const getData = async () => {
    const response = await axios.get(url + input); //Chiamo tramite axios l'api e ne restutisco i dati
    console.log(response.data.items[0].volumeInfo.title);
    setBooks(response.data.items);
  };

  useEffect(() => {
    getData(); // Chiamata all'interno di una funzione in useEffect perche lo use effect non può essere asyncrono
  }, []); //   Clean up cosi gli diciamo che vogliamo che venga chiamato solo al primo render se no va in loop senza
  return (
    <div className="second_part">
      <div className="controller">
        <input
          className="input_search"
          type="text"
          value={input} //qui prendo l'input del utente
          onChange={(e) => setInput(e.target.value)}
          name=""
          id=""
          placeHolder="Inserisci titolo, autore, genere"
        />
        <button
          onClick={getData} //Imposto la chiamata all'api cosi mi restituisce la ricerca
          type="submit"
          className="button_search"
        >
          Trova Libro
        </button>
      </div>
      <div className="result">
        <ul>
          {books.map((books, imageLinks) => {
            const img = books.volumeInfo.imageLinks && books.volumeInfo.imageLinks.smallThumbnail; //Per non far crashare l'app quando non ci sono img
            // come consigliato ho usato il metodo map al posto di for
            return (
              <li key={books} className="shadow">
                <h1>{books.volumeInfo.title || "Titolo Sconosciuto"}</h1>
                <p>{books.volumeInfo.authors || "Autore Sconosciuto"}</p>
                <p>{books.volumeInfo.description || "Nessuna Descrizione"}</p>
                <img
                  alt={books.volumeInfo.title || "Titolo libro"}
                  src={img || defaultImage}
                ></img>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
FinderApp.propTypes = {
  img: PropTypes.object.isRequired, //Per non far crashare l'app in caso di mancata image
};

export default FinderApp;
