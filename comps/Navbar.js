import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


const Navbar = () => {
    return ( 
        <nav>
          <div className={styles.navBar}>
          <div className={styles.aboutContact}>
          <h1><a>About</a></h1>
          <h1> <a>Contact</a></h1>
          </div>
          <Image className={styles.mainLogo} src="/main-logo.png" width={402} height={257} />
          <h1> <a>tel: (717) 572-6269</a></h1>
          </div>
          
        </nav>
    
     );
}
 
export default Navbar;