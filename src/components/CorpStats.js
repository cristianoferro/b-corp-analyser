import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const CorpStats = ({currentCorp}) => {
    const isBCorp = currentCorp.currentCorp.b_corp;
    console.log(currentCorp.currentCorp.left_to_b_corp);
    const left = currentCorp.currentCorp.left_to_b_corp;
    return (
        <div className="corp-stats" >
            <p className="is-certified">{`${isBCorp? "Certified B Corporation":`${left}`+' % to be a B Corp'}`}</p>
            <div className="badges">
                <div className="badge">
                    <span className="score">120%</span>
                    <img className="performance-arrow" src="" alt="" />
                    <p>Above Average</p>
                </div>
                <div className="badge">
                    <FontAwesomeIcon icon={faAward} />
                    <p>Extra Effort Badge</p>
                </div>
            </div>
        </div>
    );
}

export default CorpStats;