import style from './style.module.css'
import Image from "next/image";
import logo from '../../public/whiteLogo.svg'
import egg from '../../public/egg.svg'
import pancake from '../../public/pancake.svg'
import potato from '../../public/potato.svg'
import salat from '../../public/salat.svg'




function Footer() {



    return (
        <div>
            <div className={style.background}>

                <div className={style.footerblocks}>

                    <div className={style.leftblock}>
                        <Image
                        src ={logo}
                        alt =''
                        />
                        <p className={style.text}>In the new era of technology we look a <br/> in the future with certainty and pride to <br/> for our company and</p>
                    </div>

                    <div className={style.centreblock}>
                        <div className={style.left}>
                            <p className={style.title}>Pages</p>
                            <p className={style.text}>Home</p>
                            <p className={style.text}>About</p>
                            <p className={style.text}>Menu</p>
                            <p className={style.text}>Pricing</p>
                            <p className={style.text}>Blog</p>
                            <p className={style.text}>Contact</p>
                            <p className={style.text}>Delivery</p>
                        </div>
                        <div className={style.right}>
                            <p className={style.title}>Utility Pages</p>
                            <p className={style.text}>Start Here</p>
                            <p className={style.text}>Styleguide</p>
                            <p className={style.text}>Password Protected</p>
                            <p className={style.text}>404 Not Found</p>
                            <p className={style.text}>Licenses</p>
                            <p className={style.text}>Changelog</p>
                            <p className={style.text}>View More</p>
                        </div>
                    </div>

                    <div className={style.rightblock}>
                        <p className={style.title}>Follow Us On Instagram</p>
                        <div className={style.firstline}>
                            <Image
                            src={egg}
                            alt = ''
                            />
                            <Image
                            src={potato}
                            alt = ''
                            />
                        </div>
                        <div className={style.secondline}>
                            <Image
                            src={salat}
                            alt = ''
                            />
                            <Image
                            src={pancake}
                            alt = ''
                            />
                        </div>
                    </div>

                </div>

                <div className={style.line}></div>
                <p className={style.undertext}>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>

            </div>
        </div>
    );
}

export default Footer;