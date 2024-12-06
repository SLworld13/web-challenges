import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">MY CHOISE</h2>
      <label htmlFor="buttonElement" className="article__label"></label>
      <input id="input-field" type="text" className="article__input" />
      <a
        href="https://de.wikipedia.org/wiki/Martin_Bilham"
        className="article__link"
      >
        Wikipedia
      </a>
    </article>
  );
}
