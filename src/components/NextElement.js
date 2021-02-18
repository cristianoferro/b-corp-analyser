import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faSignal, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NextElement = () => {
    return (
        <div className="next-element">
            <div className="side-rankings">
                <p className="side-rank-title">Best in Category</p>
                <div className="info-rank">
                    <FontAwesomeIcon icon={faSignal} />
                    <span>1</span>
                    <FontAwesomeIcon icon={faGlobeEurope} />
                    <span>15</span>
                </div>
            </div>
            <div className="mini-badges">
                <span class="hover-info">Coming soon</span>
            </div>
        </div>
        

    );
}

export default NextElement;