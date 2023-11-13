import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className='container-fluid ps-2 pe-2'>
                <div className="row justify-content-between">
                    <div className="col-6">
                        <h4>logo</h4>
                    </div>
                    <div className="col-6">
                        <div className="row justify-content-end">

                            <div className="col-2">menu</div>
                            <div className="col-2">Login</div>

                        </div>
                    </div>
                </div>
            </nav>
            <aside className='pt-5 ps-2 pe-2'>
               <ul>
                    <li>
                        <div className="box-menu-sidebar mt-3">
                            
                        </div>
                    </li>
                    <li>
                        <div className="box-menu-sidebar mt-3">
                            
                        </div>
                    </li>
                    <li>
                        <div className="box-menu-sidebar mt-3">
                            
                        </div>
                    </li>
                    <li>
                        <div className="box-menu-sidebar mt-3">
                            
                        </div>
                    </li>
               </ul>
            </aside>
        </>
    );
};

export default Navbar;
