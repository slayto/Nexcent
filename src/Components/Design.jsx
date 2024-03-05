
import designImg from '../assets/images/design.png'
export const Design = () => {
  return (
    <div className="container px-4 py-5">
        <div className="row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-5">
                <img src={designImg} className="d-block mx-lg-auto img-fluid left-ani" alt="Bootstrap Themes"
                    width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-7">
                <h3 className="display-5 fw-bold lh-1 mb-3">How to design your site footer like we did</h3>
                <p className="lead">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
                    molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero
                    ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis
                    finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget
                    nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit
                    venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-success btn-lg px-4 me-md-2">Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
