import Image from "next/image";
import Phone from '../Header/img/phone.svg'
import Message from '../Header/img/message.svg'
import style from '../Header/style.module.css'
import logo from '../Header/img/Logo.svg'
import twit from '../../public/1.svg'
import face from '../../public/2.svg'
import inst from '../../public/3.svg'
import git from '../../public/4.svg'


function Header() {



    return (
        <div>
            <div className={style.background}>
                <div className={style.countain}>
                    <div className={style.leftside}>
                        <div className={style.number}>
                            <Image
                                src={Phone}
                                alt=''
                            />
                            <p>(414) 857 - 0107</p>
                        </div>
                        <div className={style.number}>
                            <Image
                                src={Message}
                                alt=''
                            />
                            <p>yummy@bistrobliss</p>
                        </div>

                    </div>
                    <div className={style.rightside}>
                        <Image 
                        src={twit}
                        alt =''
                        />
                        <Image 
                        src={face}
                        alt =''
                        />
                        <Image 
                        src={inst}
                        alt =''
                        />
                        <Image 
                        src={git}
                        alt =''
                        />
                    </div>
                </div>
            </div>

            <div className={style.background2}>
                <div className={style.countain2}>
                    <div className={style.logo}>
                        <Image
                        src ={logo}
                        alt = ''
                        />
                    </div>
                    <div className={style.actions}>
                        <button>Home</button>
                        <button>About</button>
                        <button>Menu</button>
                    </div>
                    <div>
                        <button className={style.reserveButton}>Book A Table</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;