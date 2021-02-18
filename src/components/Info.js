import { useState, useRef }from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faSignal, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Info = ({ currentCorp }) => {
    const [aboutClicked, setAboutClicked] = useState(false)
    const about = useRef(null);

    const aboutClickHandler = (event) => {
        setAboutClicked(!aboutClicked);
    }

    return (
        <motion.div className="info"
            animate={{y:`${aboutClicked?'-58.5vh':'0vh'}`}} 
            transition={{duration:0.5, ease:'easeInOut'}}
        >
            
            <motion.div className="corp-title"
            animate={{opacity:`${aboutClicked?'0':'1'}`}}
            >
                <h1>{currentCorp.currentCorp.company}</h1>
            </motion.div>
                
            <motion.div className="info-rank"
            animate={{opacity:`${aboutClicked?'0':'1'}`}}
            >
                <FontAwesomeIcon icon={faSignal} />
                <span>{currentCorp.currentCorp.category_rank} </span>
                <FontAwesomeIcon icon={faGlobeEurope} />
                <span>{currentCorp.currentCorp.global_rank}</span>
            </motion.div>
            <motion.div className="logo"
            animate={{opacity:`${aboutClicked?'0':'1'}`}}
            >
                <img src={currentCorp.currentCorp.logo} alt="Category Ranking" />
            </motion.div>
            <motion.p className="description"
            animate={{opacity:`${aboutClicked?'0':'1'}`}}
            >{currentCorp.currentCorp.description}</motion.p>

            <button onClick={aboutClickHandler} className="about-btn">
                <p> 
                    {aboutClicked?'About ':'About '}<b>{currentCorp.currentCorp.company}</b>
                </p> 
                <FontAwesomeIcon icon={faChevronDown}/>
            </button>

            <motion.p className="about"
                animate={{opacity:`${aboutClicked?'1':'0'}`}}
            >
                Ocean Bottle enables anyone who gives a damn about our Ocean the opportunity to turn the tap off Ocean Plastic. Each bottle is smart chip activated and funds collection of ocean-bound plastic, whilst setting up recycling infrastructure in coastal communities with high levels of plastic pollution around the world. Plastic collectors are able to exchange plastic waste for money or digital tokens via blockchain technology to spend on tuition, tech goods, health care and micro-finance. To date, we've funded the collection of over 1 Million kilograms of plastic from entering the Ocean.
            </motion.p>

        </motion.div>
    );
}

export default Info;
