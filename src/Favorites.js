import { Link } from "react-router-dom";

function Favorites() {
    return (
      <>
        <main>
          <h2>Favorites</h2>
          <p>
            This is where the favorites will go.
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

  export default Favorites;