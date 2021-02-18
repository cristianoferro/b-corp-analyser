import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { useState } from 'react';

const CorpStats = ({currentCorp}) => {

    let counting = 0;

    const isBCorp = currentCorp.currentCorp.b_corp;
    console.log(currentCorp.currentCorp.left_to_b_corp);
    const left = currentCorp.currentCorp.left_to_b_corp;

    const [isBadge1Extended, setExtendedBadge1 ] = useState(false);
    const extendBadge1 = () => {
        setExtendedBadge1(!isBadge1Extended)
        setExtendedBadge2(isBadge1Extended ? !isBadge1Extended : isBadge1Extended)
    }
    const [isBadge2Extended, setExtendedBadge2 ] = useState(false);
    const extendBadge2 = () => {
        setExtendedBadge2(!isBadge2Extended)
        setExtendedBadge1(isBadge2Extended ? !isBadge2Extended : isBadge2Extended)
    }
    return (
        <div className="corp-stats" >
            <p className="is-certified">{`${isBCorp? "Certified B Corporation":`${left}`+' % to be a B Corp'}`}</p>
            <div className={`badges ${(isBadge1Extended || isBadge2Extended) ? 'extended' : ''}`}>
                <div onClick={extendBadge1} className={`badge ${isBadge1Extended?'extend-badge':''}`}>
                    <div className="badge-main-content">
                        <CountUp className="score" end={currentCorp.currentCorp.score} suffix="%"/>
                        <p>Above Average</p>
                    </div>
                    <div className="score-detail">
                        <div className="score-cols score-numbers">
                            <p className="score-nr">86.9</p>
                            <p className="b-corp-score_nr">80</p>
                            <p className="ordinary-score-nr">50.9</p>
                        </div>
                        <div className="score-cols svg_score_vertical">
                            <svg viewbox="0 0 100 0.2">
                                <circle cx="0.63vw" cy="0.63vw" r="0.44vw" stroke="white" stroke-width="3" fill="#b8ffff" />
                                <line x1="0.63vw" y1="1.06vw" x2="0.63vw" y2="3.57vw" />

                                <circle cx="0.63vw" cy="4.01vw" r="0.44vw" stroke="white" stroke-width="3" fill="#ffffff00" />
                                <line x1="0.63vw" y1="4.45vw" x2="0.63vw" y2="7vw"  />

                                <circle cx="0.63vw" cy="7.4vw" r="0.44vw" stroke="#e0e0e0" stroke-width="3" fill="#ffffff00" />
                                
                            </svg>
                        </div>
                        <div className="score-cols score_types">
                            <p>Score</p>
                            <p>Qualifies for B Corp Certification</p>
                            <p>Median score for ordinary businesses</p>
                        </div>
                    </div>
                    
                </div>
                <div onClick={extendBadge2} className={`badge ${isBadge2Extended?'extend-badge':''}`}>
                    <div className={`badge-main-content ${(!isBadge1Extended) ? 'hidden-badge' : ''}`} >
                        <FontAwesomeIcon icon={faAward} />
                        <p>Extra Effort Badge</p>
                    </div>
                    <div className="score-detail">
                        {/* <p>86.9</p><p>score</p>
                        <p>80</p><p>Qualifies for b corp certification</p>
                        <p>50.9</p><p>median score for ordinary businesses</p> */}
                        <span class="hover-info">Coming soon</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CorpStats;