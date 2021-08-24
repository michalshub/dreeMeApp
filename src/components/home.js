import React, { useEffect, useState } from 'react';
import {
    withRouter,
    Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { setFinish, setResults, setSumOfSets } from '../Store/actions';

const mapStateToProps = (state) => {
    return {
        choosing: state.choosingReducer.choosing
    };
}

const mapDispatchToProps = (dispatch) => ({
    setResults: (res) => dispatch(setResults(res)),
    setFinish: (bool) => dispatch(setFinish(bool)),
    setSumOfSets: (sum) => dispatch(setSumOfSets(sum))
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Home(props) {
    const { choosing, setFinish, history } = props;
    const [sumItems, setSumItems] = useState(0)


    useEffect(() => {
        if (choosing.shoes == true && choosing.shirt == true && choosing.pants == true) {
            setSumItems(3);
            setFinish(true);
        }
        else if (choosing.shoes == false && choosing.shirt == true && choosing.pants == true ||
            choosing.shoes == true && choosing.shirt == false && choosing.pants == true ||
            choosing.shoes == true && choosing.shirt == true && choosing.pants == false)
            setSumItems(2);
        else if (choosing.shoes == false && choosing.shirt == false && choosing.pants == true ||
            choosing.shoes == true && choosing.shirt == false && choosing.pants == false ||
            choosing.shoes == false && choosing.shirt == true && choosing.pants == false)
            setSumItems(1);
        else setSumItems(0);

    }, [])

    function redirectToSuccess() {
        history.push('/SuccessPage')
    }

    return (
        <div class="center">
            <Menu />
            <h1 style={{fontStyle:"italic"}}>Dress Me - Application</h1>
            <p>you chose {choosing.sumOfSets} sets of clothes</p>
            <p>you chose {sumItems} items of the current set</p>
            {choosing.finish ?
                <button className="btn btn-info" onClick={redirectToSuccess}>finish</button>
                :
                <>
                </>
            }
        </div>
    );
}))



function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/Shoes">Shoes</Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/Shirts">Shirts</Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/Pants">Pants</Link>
                </div>

            </nav>
        </>
    );
}
