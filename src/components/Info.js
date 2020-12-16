const Info = ({ currentCorp }) => {
    return (
        <div className="info">
            <h1>
                Ocean Bottle
            </h1>
            <div>
                <img className="rank-icon" src={currentCorp.logo} alt="Category Ranking" />
                <span>2</span>
                <img className="rank-icon" src="" alt="Global Ranking" />
                <span>25</span>
            </div>
            <div>
                <img src="" alt="Logo" />
            </div>
            <p>
                Ocean Bottle makes reusable bottles that save our Ocean.
            </p>

            <p>
                About <b>Ocean Bottle</b>
            </p>
            <img className="down-arrow" src="" alt="" />

        </div>
    );
}

export default Info;
