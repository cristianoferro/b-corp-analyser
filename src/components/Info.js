
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faSignal, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Info = ({ currentCorp }) => {
    console.log("curr curr", currentCorp.currentCorp.company)
    return (
        <div className="info">
            <div className="corp-title">
                <h1>{currentCorp.currentCorp.company}</h1>
            </div>
                
            <div className="info-rank">
                <FontAwesomeIcon icon={faSignal} />
                <span>{currentCorp.currentCorp.category_rank} </span>
                <FontAwesomeIcon icon={faGlobeEurope} />
                <span>{currentCorp.currentCorp.global_rank}</span>
            </div>
            <div>
                <img className="logo" src={currentCorp.currentCorp.logo} alt="Category Ranking" />
            </div>
            <p className="description">{currentCorp.currentCorp.description}</p>

            <p>
                About <b>Ocean Bottle</b> 
                <FontAwesomeIcon icon={faChevronDown}/>
            </p>
            <img className="down-arrow" src="" alt="" />

        </div>
    );
}

export default Info;
