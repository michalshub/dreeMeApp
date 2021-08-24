import {
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
// import ShowItem from './showItem';
import { setShoesSelected, setShoesId, setShoesType, setShoesName, setShoesColor, setShoesSize, setShoesBrand,
    setShirtSelected, setShirtId, setShirtType, setShirtName, setShirtColor, setShirtSize, setShirtBrand,
    setPantsSelected, setPantsId, setPantsType, setPantsName, setPantsColor, setPantsSize, setPantsBrand,
    setSumOfSets } from '../Store/actions';
import './desine.css';
const mapStateToProps = (state) => {
    return {
        myShoes: state.shoesReducer.myShoes,
        choosing: state.choosingReducer.choosing

    };
}

const mapDispatchToProps = (dispatch) => ({
    setShoesSelected: (bool) => dispatch(setShoesSelected(bool)),
    setShoesId: (id) => dispatch(setShoesId(id)),
    setShoesType: (type) => dispatch(setShoesType(type)),
    setShoesName: (name) => dispatch(setShoesName(name)),
    setShoesColor: (color) => dispatch(setShoesColor(color)),
    setShoesSize: (size) => dispatch(setShoesSize(size)),
    setShoesBrand: (brand) => dispatch(setShoesBrand(brand)),

    setShirtSelected: (bool) => dispatch(setShirtSelected(bool)),
    setShirtId: (id) => dispatch(setShirtId(id)),
    setShirtType: (type) => dispatch(setShirtType(type)),
    setShirtName: (name) => dispatch(setShirtName(name)),
    setShirtColor: (color) => dispatch(setShirtColor(color)),
    setShirtSize: (size) => dispatch(setShirtSize(size)),
    setShirtBrand: (brand) => dispatch(setShirtBrand(brand)),

    setPantsSelected: (bool) => dispatch(setPantsSelected(bool)),
    setPantsId: (id) => dispatch(setPantsId(id)),
    setPantsType: (type) => dispatch(setPantsType(type)),
    setPantsName: (name) => dispatch(setPantsName(name)),
    setPantsColor: (color) => dispatch(setPantsColor(color)),
    setPantsSize: (size) => dispatch(setPantsSize(size)),
    setPantsBrand: (brand) => dispatch(setPantsBrand(brand)),


})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Shoes(props) {
    const { cuurentItem, setShoesSelected, setShoesId, setShoesType, setShoesName, setShoesColor, setShoesSize, setShoesBrand,
        setShirtSelected, setShirtId, setShirtType, setShirtName, setShirtColor, setShirtSize, setShirtBrand,
        setPantsSelected, setPantsId, setPantsType, setPantsName, setPantsColor, setPantsSize, setPantsBrand
        , history } = props;

    // const { cuurentItem } = props;
    const [chooseColor, setChooseColor] = useState(false);

    function showSizes(item,color) {
        if(item.type==='shoes')
        {
            setShoesColor(color);

        }
        else if (item.type === 'shirt') {
            setShirtColor(color);
        }
        else{
            setPantsColor(color);
        }
        setChooseColor(true);

      

    }

    function confirmChoosing(item, it) {

        let conf = window.confirm('Do you want to add this item?');
        if (conf) {
            if (item.type === 'shoes') {
                setShoesSelected(true);
                setShoesId(item.id);
                setShoesType(item.type);
                setShoesName(item.name);
                setShoesSize(it);
                setShoesBrand(item.brand);
            }
            else if (item.type === 'shirt') {
                setShirtSelected(true);
                setShirtId(item.id);
                setShirtType(item.type);
                setShirtName(item.name);
                setShirtSize(it);
                setShirtBrand(item.brand);
            }
            else {
                setPantsSelected(true);
                setPantsId(item.id);
                setPantsType(item.type);
                setPantsName(item.name);
                setPantsSize(it);
                setPantsBrand(item.brand);
            }
            history.push('/Home');

        }
    }

    return (
        <div >
            <li > <b>name: </b> {cuurentItem.name} <b> brand: </b>{cuurentItem.brand}
                <b> colors: </b>
                {
                    cuurentItem.colors.map((it, index) =>
                        <button className="btn btn-light" style={{ margin:"3px",color: `${it}` }} key={index} onClick={() => showSizes(cuurentItem,it)}>{it}</button>
                    )

                }
                {chooseColor ?
                    <>
                        <br />
                        <b>sizes: </b>
                        {cuurentItem.sizes.map((it, index) =>
                            <button className="btn btn-light" style={{ margin:"2px"}} key={index} onClick={() => confirmChoosing(cuurentItem, it)}>{it}</button>
                        )}
                    </>
                    :
                    <>
                    </>}
            </li>
        </div>
    );
}))