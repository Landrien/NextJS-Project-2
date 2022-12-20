import Image from "next/image";

const NavBar = () => {
    return (  
    <div>
        <div className="navbar1">
            <a>Service & Contact</a>
            <a>About the site</a>
            <a>My login details</a>
            <a>Log out</a>
            <input type="search" value="" placeholder="Search" className="search-input"/>
             <button type="submit" className="search-button">
                <svg className="submit-button">
                </svg>
                </button>
        </div>
        <div className="navbar2">
            <Image src="/../public/assets/images/logo-grey_tcm153-157919.png"
            alt="PostNL-logo"
            width={50}
            height={50}/>
            <a>News</a>
            <a>work info</a>
            <a>Personnel info</a>
            <a>About PostNL </a>
            <a>Fun & Advantage</a>
            <h2>My PostNL</h2>
        </div>
        <div className="navbar3">
            <a>About PostNL</a> <ul>&gt;</ul> <a>Themes</a> <ul>&gt;</ul> <a>Also flip the switch</a>
        </div>
        <div style={{
            backgroundImage: 'url("https://eu-images.contentstack.com/v3/assets/bltbb64f1582e91908c/blt4d1711240d820ec0/6362684d2cc3a4729cc2cc41/220929-ZODKO_tcm153-231237_w730.jpg")',
            height:500,
            width:1000,
            }}>
        </div>
    </div>
        );
}
 
export default NavBar;