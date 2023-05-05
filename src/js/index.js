//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";

const App = () => {
    return (
      <div className="main">
        <Home />
        <Jumbotron
                title="Welcome to react"
                description="React is the most popular rendering library in the world"
                buttonLabel="Go to the official website"
                buttonURL="https://reactjs.org/"
              />,
        
       
      </div>
    );
  };

  
  const CardContainer = () => {
    return (
      <div className="contenedor">
       <Card 
            title="Bob Dylan"
            imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
            description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
            buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
            buttonLabel="Go to wikipedia"
          />
				<Card
            title="Otra persona"
            imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
            description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
            buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
            buttonLabel="Go to wikipedia"
          />
        <Card
            title="Otra persona"
            imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
            description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
            buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
            buttonLabel="Go to wikipedia"
          />
			<Card
            title="Otra persona"
            imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
            description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
            buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
            buttonLabel="Go to wikipedia"
          />
        
      </div>

    );
  };
  ReactDOM.render(<App />, document.querySelector("#app"));
  ReactDOM.render(<CardContainer />, document.querySelector("#cards1"));

  
