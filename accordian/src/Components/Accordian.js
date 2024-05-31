import React from 'react'
import {data} from "../Components/Data"
import Ui from './Ui';

const Accordian = () => {
    console.log(data);
    return(
        <>
        {
            data.map((curElem, index)=>{
                 return <Ui curElem={curElem} key={curElem.id} />
            })
        }
    </>
    )

}
export default Accordian