import AcardionBlock from "../component/acardion/AcardionTitle"
import Banner from "../component/banner/Banner"
import Advantages from "../component/block_advantages/Advantages"
import Services from "../component/block_services/Services"
import Form from "../component/from/From"
import News from "../component/news/News"
import Partners from "../component/partners/Partners"


const Menu = () => {
    return(
        <>
              <Banner />
              <Partners />
              <Advantages />
              <Services />
              <AcardionBlock />
              <News />
              <Form />
        </>
    )
}

export default Menu