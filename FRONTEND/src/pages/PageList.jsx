import React from "react";
import './PageList.css';
import ListItems from "../component/ListItem";
import PrimaryButton from "../component/primaryButton";
import AddItems from "../component/AddItems";

const PageList = () =>{
    return(
        <>
            <div className="container-fluid"> 
                <h1>To do list</h1>
                <div className="covercontent">
                    <ListItems/>
                </div>
                <div className="coverbutton mt-3">
                    <PrimaryButton/>
                </div>
            </div>
        </>
    )
}

export default PageList;
