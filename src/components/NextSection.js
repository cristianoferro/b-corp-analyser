import NextElement from "./NextElement";
const NextSection = () => {
    return (
        <div className="next-section">
            <div className="next-title">
                <h1>compare</h1>
            </div>
        
            {/*NextElement loop*/}
            <NextElement/>
            <button>
                See more
            </button>
        </div>

    );
}

export default NextSection;