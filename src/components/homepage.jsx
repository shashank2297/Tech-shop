import Footer from './footer';
import Header from './header';
import SimpleSlider from './simpleslider';
import Advantages from './advantages';
import Topproducts from './topproducts';
import FeaturedProducts from './featuredproducts';

function Homepage() {
    return (
        <>
            <Header />
            <SimpleSlider />
            <FeaturedProducts />
            <Topproducts />
            <Advantages />
            <Footer />
        </>
    )
}

export default Homepage