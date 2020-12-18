import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <nav>
            <div className="menu-items">
                <h1>Rankings</h1>
                <h1>Hall of Fame</h1>
            </div>
            <div className="search-bar">
                <input className="search-text" type="text">
                </input>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            
        </nav>
    );
}

export default Nav;