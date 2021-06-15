import React from "react";
import Routes from "./Routes/routes";

import Nav from "./Components/Nav/nav";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
      <card images="" title="Card Title" content="Card-body" />
      <Footer />
    </div>
  );
}

export default App;
