import React , {Fragment} from 'react';
import { ParallaxBanner , Parallax} from 'react-scroll-parallax';


class HeroBanner extends React.Component {

    render (){
        const { image, min, max, children } = this.props;
        return (
            <Fragment>
            
                <div className="hero-container">
                <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
                    <div
                        className="hero-image"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </Parallax>
                <div className="hero-children">{children}</div>
                </div>
                </Fragment>

        );
    }
}

export default HeroBanner;