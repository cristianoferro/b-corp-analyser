
import CorpStats from "./CorpStats";
import Info from "./Info";
import NextSection from "./NextSection";

const ScreenCorpPresentation = ( currentCorp, setCurrentCorp, corps ) => {
    return (
        <div className="screen">
            <Info currentCorp={currentCorp} setCurrentCorp={setCurrentCorp} corps={corps} />
            <CorpStats />
            <NextSection />
            <div className="margin-right-background"></div>
        </div>
    );
}

export default ScreenCorpPresentation;
