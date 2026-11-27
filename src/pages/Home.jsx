import HeroSlider from "../components/HeroSlider";
import ShoppingBenefits from "../components/ShoppingBenefits";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import PremiumBanner from "../components/PremiumBanner";
import ProductSection from "../components/ProductSection";
import OfferBanner from "../components/OfferBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";

import products from "../data/products";

export default function Home() {

  const trendingProducts = products
    .filter((product) => product.category === "headphones")
    .slice(0, 8);

  const mobiles = products
    .filter((product) => product.category === "mobiles")
    .slice(0, 4);

  const bestSellers = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const speakers = products
    .filter((product) => product.category === "speakers")
    .slice(0, 4);

  const headphone = products.find((product) => product.id === 20);

  const speaker = products.find((product) => product.id === 37);

  return (
    <>

      <HeroSlider />

      <ShoppingBenefits />

      <Categories />

      <FeaturedProducts />

      <PremiumBanner
        label="PREMIUM AUDIO COLLECTION"
        title="Feel Every Beat."
        description="Discover immersive sound and premium headphones."
        image={headphone?.image}
        backgroundText="PRO"
        link="/products?category=headphones"
      />

      <ProductSection
        label="TRENDING NOW"
        title="Trending Products"
        description="Discover our featured headphones and wireless earbuds."
        products={trendingProducts}
        link="/products?category=headphones"
      />

      <ProductSection
        label="NEXT GENERATION"
        title="Latest Smartphones"
        description="Powerful performance meets premium design."
        products={mobiles}
        link="/products?category=mobiles"
      />

      <OfferBanner />

      <ProductSection
        label="CUSTOMER FAVOURITES"
        title="Top Rated Products"
        description="Explore the highest-rated products in our collection."
        products={bestSellers}
        link="/products"
      />

      <PremiumBanner
        label="POWERFUL SOUND"
        title="Sound Without Limits."
        description="Discover our premium wireless speaker collection."
        image={speaker?.image}
        backgroundText="BASS"
        link="/products?category=speakers"
      />

      <ProductSection
        label="PREMIUM SOUND"
        title="Speakers Collection"
        description="Bring your favourite music to life."
        products={speakers}
        link="/products?category=speakers"
      />

      <WhyChooseUs />

      <FAQ />

      <Newsletter />

    </>
  );
}