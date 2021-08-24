import {
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import ShowItem from './showItem';
// import { setShirtSelected, setShirtId, setShirtType, setShirtName, setShirtColor, setShirtSize, setShirtBrand } from '../Store/actions';
import './desine.css';
const mapStateToProps = (state) => {
    return {
        // shoppingCart:state.shoppingCartReducer.shoppingCart
        myShirt: state.shirtsReducer.myShirt,
        choosing: state.choosingReducer.choosing

    };
}

const mapDispatchToProps = (dispatch) => ({
    // setShirtSelected: (bool) => dispatch(setShirtSelected(bool)),
    // setShirtId: (id) => dispatch(setShirtId(id)),
    // setShirtType: (type) => dispatch(setShirtType(type)),
    // setShirtName: (name) => dispatch(setShirtName(name)),
    // setShirtColor: (color) => dispatch(setShirtColor(color)),
    // setShirtSize: (size) => dispatch(setShirtSize(size)),
    // setShirtBrand: (brand) => dispatch(setShirtBrand(brand)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Shirts() {
    const [shirts, setShirts] = useState([]);
    const [allResults, setAllResults] = useState([]);
    let shirtsTemp = [];
    let result = [];
    useEffect(() => {
        fetch("http://www.mocky.io/v2/5e3940013200005e00ddf87e")
            .then(response => response.json())
            .then(result => {
                setAllResults(result.results);
                console.log(allResults);
            })
            .catch(error => console.log('error', error));

    }, [])

    let sortedResults = [...allResults];

    sortedResults.map((item, index) => {
        if (item.type === 'shirt') {
            shirtsTemp.push(item);
        }
    })

    function fiveResults() {
        let counter = 0;
        let fiveResults = []
        while (counter < 5 && result.length > (counter - 1)) {
            fiveResults.push(result[counter]);
            counter++;
        }
        console.log(fiveResults);
        setShirts(fiveResults)
    }

    function handleSearch(event) {

        let value = event.target.value.toLowerCase();
        console.log(value);
        result = shirtsTemp.filter((data) => {
            return data.name.toLowerCase().startsWith(value.toLowerCase()) === true;
        })
        result.sort(
            (a, b) => a.name > b.name ? 1 : -1
        )
        console.log(result);
        if (result.length > 0) {
            if (value.length <= 2 && value !== '') {
                fiveResults()
            }
            else {
                setShirts(result);
            }
        }
        else {
            result = shirtsTemp;
        }


    }


    return (
        <div >
            <div class="center">
                <h1>choose your favorate shirt</h1>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48">
                    <g>
                        <path id="path1" transform="rotate(360,24,24) translate(11,11.0406243801117) scale(-0.8125,0.8125)  " fill="#0B8282" d="M12.261993,0L15.950012,6.1810013 19.639008,0 20.934998,1.4949956 24.623016,2.3929752C24.623016,2.3929752 27.912994,4.0869757 28.710999,7.2769791 29.01001,8.6729757 32,14.952975 32,16.248997L32,26.915991 27.115997,26.915991 27.115997,16.846989C27.115997,16.049992,24.623016,12.360995,24.623016,12.360995L24.623016,16.049992 24.623016,31.900002 7.3770142,31.900002 7.3770142,12.461002C7.2780151,12.560977,4.8850098,16.149998,4.8850098,16.946995L4.8850098,27.015997 0,27.015997 0,16.349003C0,15.052982 2.8909912,8.7729818 3.2900085,7.3769852 4.0880127,4.2869884 7.2780151,2.4919743 7.3770142,2.4919743L11.06601,1.5949712z" />
                    </g>
                </svg>


                <label>Search:</label>
                <input type="text" onChange={(event) => handleSearch(event)} />
            </div>
            {shirts.length > 0 ?
                <ul>
                    <p>there are {shirts.length} items for your choosing</p>

                    {shirts.map((item, i) =>
                        <ShowItem cuurentItem={item} />


                    )}

                </ul>
                :
                <>
                    {shirtsTemp?.length > 0 ?
                        <>
                            <p>there are {shirtsTemp.length} items for your choosing</p>

                            {
                                shirtsTemp.map(
                                    (item, i) =>
                                        <ShowItem cuurentItem={item} />
                                )

                            }

                        </>
                        :
                        <>
                            <p>search for shirts</p>
                            <div class="container-fluid">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="preloader1">
                                                <div class="loader loader-inner-1">
                                                    <div class="loader loader-inner-2">
                                                        <div class="loader loader-inner-3">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                </>}

        </div>
    );
}))