import Footer from './footer';
import Header from './header';
import SimpleSlider from './simpleslider';
import Advantages from './advantages';
import Updateproducts from './updateproducts';
import FeaturedProducts from './featuredproducts';

function Homepage() {
    return (
        <div>
            <Header />
            <SimpleSlider />
            <FeaturedProducts />
            <Updateproducts />
            <Advantages />
            <Footer />
        </div>
    )
}

export default Homepage