import React, { useState,useEffect } from "react";
import "./AddItems.css";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";


const EditItems = () => {
    const urlPut = "http://localhost:3444/api/v1/items/";
    const [newItems, setNewItems] = useState({
        name: "",
        price: "",
        title: "",
        image: null,
    });
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        getItemsById();
    },[]);

    const getItemsById = async () => {
        try {
            const response = await axios.get(`http://localhost:3444/api/v1/items/${id}`);
            const responseData = response.data.data || {};
            setNewItems(responseData);
            console.log(responseData);
        } catch (err) {
            console.log(err);
            setNewItems({
                name: "",
                price: "",
                title: "",
                image: null, // Ganti dengan nilai default yang sesuai
            });
        }
    };
    

    


    const updateItems = async (e) => {
        try {
          e.preventDefault();
      
          const formData = new FormData();
          formData.append("name", newItems.name);
          formData.append("price", newItems.price);
          formData.append("title", newItems.title);
          formData.append("image", newItems.image);
      
          const response = await axios.put(urlPut + id, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
      
          if (response.status === 200) {
            console.log("Item berhasil diupdate:", response.data);
            navigate("/");
          } else {
            console.log("Gagal melakukan ", response.statusText);
          }
        } catch (err) {
          console.error("Gagal mengupdate item:", err.message);
        }
      };
      

    return (
        <>
            <div className="set-container">
                <h1>Edit Items</h1>
                <div className="covercontent">
                    <form onSubmit={updateItems}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={newItems.name}
                                onChange={(e) =>
                                setNewItems({ ...newItems, name: e.target.value })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                value={newItems.price}
                                onChange={(e) =>
                                setNewItems({ ...newItems, price: e.target.value })
                                }
                            />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={newItems.title}
                            onChange={(e) =>
                            setNewItems({ ...newItems, title: e.target.value })
                            }
                        />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => {
                                    e.target.files.length && setNewItems({ ...newItems, image: e.target.files[0] || null })
                                }
                            
                            }
                        />
                        </div>
                        <button type="submit" className="btn btn-success">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditItems;
