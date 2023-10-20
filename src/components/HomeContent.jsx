import VisualNav from "./ui/VisualNav"
import HomeProductGallery from "./HomeProductGallery"

function  HomeContent(){
    return(
        <div className="home-content">
            <VisualNav/>
            <HomeProductGallery/>
        </div>
    )
}

export default HomeContent
