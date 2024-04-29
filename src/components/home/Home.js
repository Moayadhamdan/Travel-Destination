import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';
function Home(prop){
    return (
        <div className="container">
        <Header />
        <main>
          {
            prop.data.map((element)=>
              <Tours name={element.name} image={element.image} info={element.info} price={element.price} />
            )
          }
        </main>
        <Footer />
        </div>
      );
}

export default Home;