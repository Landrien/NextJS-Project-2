import Link from "next/link";
import { useEffect } from "react";
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'


const NotFound = () => {
    const router = useRouter();
    
    useEffect(()=> {
        setTimeout(()=> {
            //router.go(1)
            router.push('/');
        },3000)
    }, [router])

    return ( 
        <div className="not-found">
            <h1>Oooooops....</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link  href='/'><a>Homepage</a></Link></p>
        </div>
     );
}
 //<Link href='/'><a className={styles.btn}>Go back to the Homepage </a></Link>
export default NotFound;