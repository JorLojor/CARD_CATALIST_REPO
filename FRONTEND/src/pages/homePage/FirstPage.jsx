import Navbar from "../../components/Navbar/Navbar";
import './FirstPage.css';
import potoDummy from '../../../public/Dummy.png'


const FirstPage = () => {
    // code here


    return (
        <>
            <nav>
                <Navbar />
            </nav>

            <section className="container-fluid mt-5 ms-2 page-home-setting">
                <div className="row box-content-first-page">
                    <div className="col-8">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="col-3">
                        <div className="box-profile-home-page pt-3">
                            <div className="cover-img-box-profile-home-page d-flex justify-content-center align-items-center">
                                <img src={potoDummy} alt="" />
                            </div>
                            <div className="row cover-profile-data-home-page mt-2">
                                <div className="col-12">
                                    <h5 className="text-center">fulan</h5>
                                </div>
                                <div className="col-12">
                                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
                                </div>
                                <div className="col-12">
                                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
                                </div>
                                <div className="col-12">
                                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default FirstPage;
