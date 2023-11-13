import React, { useState, useEffect } from "react";
import './ListItem.css';
import axios from "axios";
import { Link } from "react-router-dom";

const ListItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        try {
            const response = await axios.get('http://localhost:3444/api/v1/items');
            setItems(response.data.data);
            console.log(response.data.data);
        } catch (err) {
            console.log(err);
            setItems([]);
        }
    }

    const deleteItem = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3444/api/v1/items/${id}`);
            if (response.status === 200) {
                console.log("Item berhasil dihapus");
                // Perbarui daftar item setelah menghapus
                getItems();
            } else {
                console.log("Gagal menghapus item");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {items.map((item) => (
                        <div className="col-2" key={item._id}>
                            <div className="card card-items">
                                <img src={'http://localhost:3444/' + item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text">{item.price}</p>
                                    <p className="card-text">{item.title}</p>
                                </div>
                                <div className="card-body">
                                    <Link to={`/edit/${item._id}`} className="btn btn-warning text-decoration-none text-white">Edit</Link>
                                    <button
                                        className="btn btn-danger ms-1"
                                        onClick={() => deleteItem(item._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListItems;
