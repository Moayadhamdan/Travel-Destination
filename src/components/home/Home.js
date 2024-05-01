import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';
const data=require("../../data/db.json");

function Home(){
    return (
        <div className="container">
        <Header/>
        <main>
          {
            data.map((element)=>
              <Tours name={element.name} image={element.image} info={element.info} price={element.price} />
            )
          }
        </main>
        <Footer />
        </div>
      );
}

export default Home;