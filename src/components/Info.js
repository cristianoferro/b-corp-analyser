import { useState, useRef }from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faSignal, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Info = ({ currentCorp }) => {
    const [aboutClicked, setAboutClicked] = useState(false)
    const about = useRef(null);
    const aboutClickHandler = (event) => {
        setAboutClicked(!aboutClicked);
        // about.current.style={bottom:`30vw`};
    }

    return (
        <div className={`info ${aboutClicked?'info-scroll':''}`}>
            
            <div className="corp-title">
                <h1>{currentCorp.currentCorp.company}</h1>
            </div>
                
            <div className="info-rank">
                <FontAwesomeIcon icon={faSignal} />
                <span>{currentCorp.currentCorp.category_rank} </span>
                <FontAwesomeIcon icon={faGlobeEurope} />
                <span>{currentCorp.currentCorp.global_rank}</span>
            </div>
            <div className="logo">
                <img src={currentCorp.currentCorp.logo} alt="Category Ranking" />
            </div>
            <p className="description">{currentCorp.currentCorp.description}</p>

            <button onClick={aboutClickHandler} className="about-btn">
                <p> 
                    {aboutClicked?'About ':'About '}<b>{currentCorp.currentCorp.company}</b>
                </p> 
                <FontAwesomeIcon icon={faChevronDown}/>
            </button>
            <img className="down-arrow" src="" alt="" />

            <p className={`about ${aboutClicked?'about-show':''}`}>Ocean Bottle enables anyone who gives a damn about our Ocean the opportunity to turn the tap off Ocean Plastic. Each bottle is smart chip activated and funds collection of ocean-bound plastic, whilst setting up recycling infrastructure in coastal communities with high levels of plastic pollution around the world. Plastic collectors are able to exchange plastic waste for money or digital tokens via blockchain technology to spend on tuition, tech goods, health care and micro-finance. To date, we've funded the collection of over 1 Million kilograms of plastic from entering the Ocean.</p>

        </div>
    );
}

export default Info;
