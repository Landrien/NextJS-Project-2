import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
    <nav>
        <div className="logo">
            <Image 
            src="/logo2.png" 
            alt="logo of this web site" 
            width={210}
            height={200}/>
        </div>
        <Link href="/"><a>Home</a></Link> 
        <Link href="./about"><a>About</a></Link>
        <Link href="./ninjas"><a>Ninja Listing</a></Link> 
    </nav> );
}
 
export default Navbar;