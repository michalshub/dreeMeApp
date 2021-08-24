import {
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { setTimer,setShoesSelected,setShirtSelected,setPantsSelected,setFinish,setSumOfSets } from '../Store/actions';

const mapStateToProps = (state) => {
    return {
        myShoes: state.shoesReducer.myShoes,
        myShirt: state.shirtsReducer.myShirt,
        myPants: state.pantsReducer.myPants,
        choosing: state.choosingReducer.choosing
    };
}

const mapDispatchToProps = (dispatch) => ({
    setTimer:(time)=>dispatch(setTimer(time)),
    setShoesSelected: (bool) => dispatch(setShoesSelected(bool)),
    setShirtSelected: (bool) => dispatch(setShirtSelected(bool)),
    setPantsSelected: (bool) => dispatch(setPantsSelected(bool)),
    setSumOfSets:(sum)=>dispatch(setSumOfSets(sum)),
    setFinish:(bool)=>dispatch(setFinish(bool)),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Home(props) {
    const { myShoes, myShirt, myPants, choosing,setTimer,setShoesSelected,setShirtSelected,setPantsSelected,setFinish,setSumOfSets, history } = props;
    const images = ["a.jpg", "b.jpg", "c.jpg", "d.jpg"];
    const [i, setI] = useState(0);
    const [time, setTime] = useState(0);


    useEffect(() => {
        setTime(choosing.timer);
        setTimer(time);
        setI(Math.floor(Math.random() * images.length))
    console.log(i);
}, [])


    function redirectToHome() {
        setShoesSelected(false);
        setShirtSelected(false);
        setPantsSelected(false);
        setFinish(false);
        setSumOfSets(choosing.sumOfSets+1);
        setTimer(0);
        history.push('/Home');
    }
    return (
    <div class="center">
        <div >
        <h1 style={{fontStyle:"italic"}}>Well Done!
            <br />
            you did it!!!
            <br />
            congratulations of your chosen!!!!!</h1>
        <img src={images[i]}></img>
        </div>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Shoes</th>
                    <th scope="col">Shirt</th>
                    <th scope="col">Pants</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">id</th>
                    <td>{myShoes.id}</td>
                    <td>{myShirt.id}</td>
                    <td>{myPants.id}</td>
                </tr>
                <tr>
                    <th scope="row">type</th>
                    <td>{myShoes.type}</td>
                    <td>{myShirt.type}</td>
                    <td>{myPants.type}</td>
                </tr>
                <tr>
                    <th scope="row">name</th>
                    <td>{myShoes.name}</td>
                    <td>{myShirt.name}</td>
                    <td>{myPants.name}</td>
                </tr>
                <tr>
                    <th scope="row">color</th>
                    <td>{myShoes.color}</td>
                    <td>{myShirt.color}</td>
                    <td>{myPants.color}</td>
                </tr>
                <tr>
                    <th scope="row">size</th>
                    <td>{myShoes.size}</td>
                    <td>{myShirt.size}</td>
                    <td>{myPants.size}</td>
                </tr>
                <tr>
                    <th scope="row">brand</th>
                    <td>{myShoes.brand}</td>
                    <td>{myShirt.brand}</td>
                    <td>{myPants.brand}</td>
                </tr>
            </tbody>
        </table>



        <p>you chose this set durring {time} seconds</p>

        <button className="btn btn-info" onClick={redirectToHome}>Select another set</button>
    </div>
);
}))