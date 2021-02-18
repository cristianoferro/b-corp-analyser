import NextElement from "./NextElement";
const NextSection = () => {
    return (
        <div className="next-section">
            <div className="next-title">
                <h1>compare</h1>
            </div>
            <div className="next-wrapper">
                <NextElement/>
            </div>
            <NextElement/>
            <NextElement/>
            <button>
                See more
                <span class="hover-info">Coming soon</span>
            </button>
        </div>

    );
}

export default NextSection;