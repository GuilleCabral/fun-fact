import Tree from '../tree.jpg'

const Home = (props) => {

    return (
        <div id="home">
            <img id="homeImg" src={Tree} alt="tree" />
            <div id="homeText" className="center">
                <h4 id="h4Home">
                    Would you like to know some cool things about trees?..<br/>
                    Check out at the tabs above
                </h4>
            </div>  
        </div>
        )
}

export default Home