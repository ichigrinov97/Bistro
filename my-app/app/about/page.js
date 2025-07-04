import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import style from './style.module.css'
import contacts from '../../public/contacts.svg'
import secTwo from '../../public/secTwo.svg'
import Image from "next/image";

function About() {




    return (
        <>
            <Header></Header>
            <section className={style.firstSec}>
                <div className={style.firstBlock}>
                    <div className={style.left}>
                        <Image
                            src={contacts}
                            alt=''
                        />
                    </div>
                    <div className={style.right}>
                        <h1>We provide healthy food for your family.</h1>
                        <p className={style.titleP}>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                        <p className={style.textP}>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    </div>
                </div>
            </section>
            <section className={style.secondSec}>
                <div className={style.secondBlock}>
                    <div className={style.leftB}>
                        <div className={style.up}>
                            <h1>A little information for our valuable guest</h1>
                            <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        </div>

                        <div className={style.down}>
                            <div className={style.infoBlock}>
                                <h1>3</h1>
                                <p>Locations</p>
                            </div>
                            <div className={style.infoBlock}>
                                <h1>1995</h1>
                                <p>Founded</p>
                            </div>
                            <div className={style.infoBlock}>
                                <h1>65+</h1>
                                <p>Staff Members</p>
                            </div>
                            <div className={style.infoBlock}>
                                <h1>100%</h1>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightB}>
                        <Image
                            src={secTwo}
                            alt=''
                        />
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>




    );
}

export default About;