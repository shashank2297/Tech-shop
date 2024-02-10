import Footer from './components/footer';
import Header from './components/header';
import SimpleSlider from './components/simpleslider';
import Advantages from './components/advantages';
import Updateproducts from './components/updateproducts';

function App() {
  return (
    <div>
    <Header />
    <SimpleSlider />
    <Updateproducts></Updateproducts>
    <Advantages/>
    <Footer />
    </div>
  );
}

export default App;
