import useHomeFetch from "../hooks/useHomeFetch";
import Categorys from "../components/slideCategory";
import PromotionSpan from "../components/promotion";
import BannerMain from "../components/bannerMain";
import ShowProducts from "../components/showProducts";
import RegistrationOffers from "../components/registrationOffers";

const Home = () => {
     console.log("home renderizou");
     const { data, isLoading, error } = useHomeFetch();
     console.log(error);
     return (
          <>
               <Categorys />
               <PromotionSpan />
               <BannerMain />
               <section>
                    <ShowProducts title="Best Seller" isLoading={isLoading} dataPokemons={data && data.bestSeller} />
                    <ShowProducts title="New products" isLoading={isLoading} dataPokemons={data && data.newProducts} />
               </section>
               <RegistrationOffers />
          </>
     );
};

export default Home;
