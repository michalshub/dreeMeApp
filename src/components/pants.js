import {
    withRouter
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ShowItem from './showItem';
import './desine.css';


export default withRouter((function Pants() {
    const [pants, setPants] = useState([]);
    const [allResults, setAllResults] = useState([]);

    let pantsTemp = [];
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

    sortedResults.map((item) => {
        if (item.type === 'pants') {
            pantsTemp.push(item);
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
        setPants(fiveResults)
    }

    function handleSearch(event) {

        let value = event.target.value.toLowerCase();
        console.log(value);
        result = pantsTemp.filter((data) => {
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
                setPants(result);
            }
        }
        else {
            result = pantsTemp;
        }

    }


    return (
        <div >
            <div class="center">
                <h1>choose your favorate Pants</h1>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48">
                    <g>
                        <path id="path1" transform="rotate(360,24,24) translate(11,15.265625) scale(-0.8125,0.8125)  " fill="#0B8282" d="M3.5999756,4.7000122L28.400024,4.7000122C28.599976,4.7000122,28.799988,4.8000183,28.799988,5L32,19.899994C32,20 32,20.100006 31.900024,20.200012 31.799988,20.300018 31.700012,20.300018 31.599976,20.300018L19.099976,21.399994C18.900024,21.399994,18.799988,21.300018,18.700012,21.200012L16,16.700012 13.299988,21.300018C13.200012,21.399994,13.099976,21.5,12.900024,21.5L0.3999939,20.399994C0.30001831,20.399994 0.20001221,20.300018 0.1000061,20.300018 0,20.100006 0,20 0,19.899994L3.2000122,5C3.2000122,4.8000183,3.4000244,4.7000122,3.5999756,4.7000122z M4.5999756,0L27.5,0C27.700012,0,27.900024,0.1000061,27.900024,0.30001831L28.299988,2.2000122C28.299988,2.3000183 28.299988,2.3999939 28.200012,2.5 28.099976,2.6000061 28,2.6000061 27.900024,2.6000061L4.2000122,2.6000061C4.0999756,2.6000061 4,2.6000061 3.9000244,2.5 3.7999878,2.3999939 3.7999878,2.3000183 3.7999878,2.2000122L4.2000122,0.30001831C4.2000122,0.1000061,4.4000244,0,4.5999756,0z" />
                    </g>
                </svg>



                <label>Search:</label>
                <input type="text" onChange={(event) => handleSearch(event)} />
            </div>
            {pants.length > 0 ?
                <ul>
                    <p>there are {pants.length} items for your choosing</p>
                    {pants.map((item, i) =>
                        <ShowItem cuurentItem={item} />
                    )}

                </ul>
                :
                <>
                    {pantsTemp?.length > 0 ?
                        <>
                            <p>there are {pantsTemp.length} items for your choosing</p>

                            {
                                pantsTemp.map(
                                    (item, i) =>
                                        <ShowItem cuurentItem={item} />
                                )

                            }

                        </>
                        :
                        <>
                            <p>search for pants</p>
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