import styles from '@/styles/Home.module.css'
import Image from 'next/image'


const About = () => {
    return ( 
        <div className={styles.aboutContainer}>
            <div className={styles.aboutGroup}>
            <h1>About</h1>
            <div className={styles.aboutGall}>
                <div className={styles.devonSub}>
                    <div> 
                    <Image className={styles.devonImage} src="/devon-greider.jpg" width={400} height={600} />
                        <h4>Devon Greider, sole propreiter</h4>
                    </div>
                    <p className={styles.aboutPara}> Devon Greider has been a fabricator for 10 years and has been. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos- trud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu. Devon Greider has been a fabricator for 10 years and has been. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos- trud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu</p>
                </div>
                <div className={styles.servicesSec}>
                <Image className={styles.devonImage} src="/devon-greider.jpg" width={400} height={600} />
                <Image className={styles.devonImage} src="/devon-greider.jpg" width={400} height={600} />
                <Image className={styles.devonImage} src="/devon-greider.jpg" width={400} height={600} />
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default About;