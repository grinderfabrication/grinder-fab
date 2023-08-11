import styles from '@/styles/Home.module.css'

const Contact = () => {
    return ( 
        <div className={styles.contactContainer}>
            <div className={styles.contactGroup}>
            <h1>Contact</h1>
            <div className={styles.contactGall}>
                <div className={styles.devonSub}>
                    <div> 
                        <h3>Devon Greider</h3>
                        <p><a href="mailto:grinderfabrication@gmail.com">grinderfabrication@gmail.com</a></p>
                        <p>135 Northview Rd, Manheim, PA 17545</p>
                    </div>
                    <iframe className={styles.spaceOut} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.532870625442!2d-76.36427378789081!3d40.15268797154783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c618ab1231d08f%3A0xa6bbd86ce214daef!2s135%20Northview%20Rd%2C%20Manheim%2C%20PA%2017545!5e0!3m2!1sen!2sus!4v1691768225020!5m2!1sen!2sus" width={500} height={400} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                </div>
            </div>
        </div>
     );
}
 
export default Contact;