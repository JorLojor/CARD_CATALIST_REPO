import React from "react";
import './PageList.css';
import ListItems from "../../components/ListPrivateItems/ListItem";
import PrimaryButton from "../../components/ListPrivateItems/primaryButton";

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
