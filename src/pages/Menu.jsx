import AcardionBlock from "../component/acardion/AcardionTitle"
import Advantages from "../component/block_advantages/Advantages"
import Services from "../component/block_services/Services"
import Form from "../component/from/From"
import BlockNews from "../component/block_news/BlockNews"
import Partners from "../component/partners/Partners"


const Menu = () => {
    return(
        <>
              <Partners />
              <Advantages />
              <Services />
              <AcardionBlock />
              <BlockNews/>
              <Form />
        </>
    )
}

export default Menu