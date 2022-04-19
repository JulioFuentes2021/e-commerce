import React from 'react';
import './styles/css/layout/Yx1Earphones.css';

function Yx1Earphones() {
  return (
    <article className="earphone">
      <div className="earphone__imageContainer">
        <img className="earphone__image" src="https://img.search.brave.com/XlTmXUGXc71M7DHhU1vXmzbVneE8B0jBkJscvjBzFEo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2ltZy5j/b20vdGh1bWIvdGVj/aG5vbG9neS81MTM5/NC0zLW1vYmlsZS1l/YXJwaG9uZS1waWN0/dXJlLWZyZWUtcGhv/dG8tcG5nLnBuZw" alt="" />
      </div>
      <div className="earphone__detail">
        <span className="earphone__name">YX1 EARPHONES</span>
        <button type="button" className="earphone__link">SEE PRODUCT</button>
      </div>
    </article>
  );
}

export default Yx1Earphones;
