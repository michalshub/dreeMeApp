import {
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import ShowItem from './showItem';
// import { setShoesSelected, setShoesId, setShoesType, setShoesName, setShoesColor, setShoesSize, setShoesBrand, setSumOfSets } from '../Store/actions';
import './desine.css';
const mapStateToProps = (state) => {
    return {
        // shoppingCart:state.shoppingCartReducer.shoppingCart
        myShoes: state.shoesReducer.myShoes,
        choosing: state.choosingReducer.choosing

    };
}

const mapDispatchToProps = (dispatch) => ({
    // setShoesSelected: (bool) => dispatch(setShoesSelected(bool)),
    // setShoesId: (id) => dispatch(setShoesId(id)),
    // setShoesType: (type) => dispatch(setShoesType(type)),
    // setShoesName: (name) => dispatch(setShoesName(name)),
    // setShoesColor: (color) => dispatch(setShoesColor(color)),
    // setShoesSize: (size) => dispatch(setShoesSize(size)),
    // setShoesBrand: (brand) => dispatch(setShoesBrand(brand)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Shoes() {
    const [shoes, setShoes] = useState([]);
    const [allResults, setAllResults] = useState([]);
    let shoesTemp = [];
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
        if (item.type === 'shoes') {
            shoesTemp.push(item);
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
        setShoes(fiveResults)
    }

    function handleSearch(event) {

        let value = event.target.value.toLowerCase();
        console.log(value);
        result = shoesTemp.filter((data) => {
            return data.name.toLowerCase().startsWith(value.toLowerCase()) === true;
        })
        result.sort(
            (a, b) => a.name > b.name ? 1 : -1
        )
        console.log(result);
        if (result.length > 0) {
            if (value.length <= 2 && value !== '') {
                fiveResults(result)
            }
            else {
                setShoes(result);
            }
        }
        else { result = shoesTemp }


    }

    return (
        <div >
            <div class="center">
                <h1>choose your favorate shoes</h1>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48">
                    <g>
                        <path id="path1" transform="rotate(360,24,24) translate(11,16.2353503704071) scale(-0.8125,0.8125)  " fill="#0B8282" d="M0.099975586,15.50039C6.5,18.300448 30,17.200415 30,17.200415 31.099976,17.200415 32,16.700401 32,16.700401L31.899963,18.100462C30.899963,19.300472,27.299988,19.100487,27.299988,19.100487L13.5,19.100487C2.2999878,19.000477,0,17.300423,0,17.300423z M29.199951,3.2000617L29.299988,3.2000617C29.299988,3.2000619,31.799988,6.6001722,31.199951,14.100361L20.899963,14.100361 16.399963,7.1001846 14.699951,8.0002014 18.799988,14.300347 16.899963,14.500364 13.099976,8.6002227 11.5,9.5002386 14.899963,14.600373 12.899963,14.80036 9.7999878,10.10026 8.1999512,11.000277 10.799988,15.000377C10.099976,15.000377 3,15.100386 0.29998779,14.100361 0.29998779,14.100361 0.099975586,11.200263 3.3999634,10.300246 3.3999634,10.300246 5.0999756,9.700226 5.2999878,9.5002386L5.2999878,9.4002305C5.2999878,9.0002262 5.6999512,8.7002002 6.1999512,8.7002002 6.3999634,8.7002002 6.6999512,8.8002092 6.7999878,8.9002172L6.8999634,8.9002172C7.0999756,8.8002092,7.3999634,8.7002002,7.5999756,8.6002227L7.6999512,8.5002138 7.6999512,8.4002048C7.6999512,8.0002014 8.0999756,7.7001754 8.5999756,7.7001754 8.7999878,7.8001839 9,7.9001924 9.1999512,8.0002014L9.5,7.8001839C9.6999512,7.8001839,9.8999634,7.7001754,10,7.600197L10.299988,7.5001885 10.299988,7.40018 10.299988,7.3001715C10.299988,6.9001671 10.699951,6.6001722 11.199951,6.6001722 11.399963,6.6001722 11.599976,6.7001501 11.799988,6.8001586L12,6.7001501 12.599976,6.4001547 12.799988,6.3001462C12.799988,6.2001373 12.699951,6.1001593 12.699951,6.0001508 12.699951,5.6001469 13.099976,5.300121 13.599976,5.300121 13.899963,5.300121 14.099976,5.4001295 14.299988,5.6001469L14.599976,5.4001295C14.799988,5.300121 15.099976,5.100134 15.299988,5.0001255 15.199951,4.9001171 15.199951,4.8001086 15.199951,4.7000996 15.199951,4.3000957 15.5,4.0001003 15.899963,4.0001003 16.099976,4.0001003 16.299988,4.1001092 16.399963,4.2000872L16.599976,4.0001003C16.799988,3.8000833 17,3.7000746 17.199951,3.5000876 17.199951,3.5000879 18,3.4000794 18.799988,4.2000872 18.799988,4.2000872 22.099976,8.3001968 23.399963,7.8001839 23.399963,7.8001839 27.799988,7.3001715 28.199951,4.4001047 28.199951,4.3000957 28.5,3.2000619 29.199951,3.2000617z M22.299988,0C26.699951,2.4000541 23,5.7001249 23,5.7001249 22.599976,5.300121 19,2.4000541 19,2.4000539z" />
                    </g>
                </svg>

                <label>Search:</label>
                <input type="text" onChange={(event) => handleSearch(event)} />
            </div>
            {shoes.length > 0 ?
                <ul>
                    <p>there are {shoes.length} items for your choosing</p>

                    {shoes.map((item, i) =>
                        <ShowItem cuurentItem={item} />
                    )}

                </ul>
                :
                <>
                    {shoesTemp?.length > 0 ?
                        <>
                            <p>there are {shoesTemp.length} items for your choosing</p>

                            {
                                shoesTemp.map(
                                    (item, i) =>
                                        <ShowItem cuurentItem={item} />
                                )

                            }

                        </>
                        :
                        <>
                            <p>search for shoes</p>
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