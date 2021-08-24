import React, { useEffect } from 'react';
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import Home from './components/home';
import { connect } from 'react-redux'
import Shoes from './components/shoes';
import Shirts from './components/shirts';
import Pants from './components/pants';
import SuccessPage from './components/successPage';
import { setTimer } from './Store/actions'
const mapStateToProps = (state) => {
    return {
    };
}
const mapDispatchToProps = (dispatch) => ({
    setTimer: (time) => dispatch(setTimer(time))
})

export default connect(mapStateToProps, mapDispatchToProps)(function RouterPage(props) {
    const {  setTimer } = props;
    let timer;


let startTime = new Date().getTime();
    useEffect(function () {

        timer = setInterval(() => {
            var seconds = Math.round((new Date().getTime() - startTime) / 1000);
            setTimer(seconds, timer);
          }, 1000)

        return function cancel() {
            clearInterval(timer);
        }

    }, [])
    return (
        <>
        <div style={{backgroundColor:"lightBlue"}}>

            <Menu/>
            <Switch>
                <Route path="/Shoes">
                    <Shoes />
                </Route>
                <Route path="/Shirts">
                    <Shirts />
                </Route>
                <Route path="/Pants">
                    <Pants />
                </Route>
                <Route path="/SuccessPage">
                    <SuccessPage />
                </Route>
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            </div>
        </>
    );
})

function Menu() {
    return (
        <>
               
  <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  
                    <div>
                        <Link className="nav-link active" aria-current="page" to="/Shoes">Shoes</Link>
                    </div>
                    <br/>
                    <div>
                        <Link className="nav-link active" aria-current="page" to="/Shirts">Shirts</Link>
                    </div>
                    <br/>
                    <div>
                        <Link className="nav-link active" aria-current="page" to="/Pants">Pants</Link>
                    </div>
                </div>
              
            </div>


        </>
    );
}