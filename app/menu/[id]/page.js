'use client';
import Header from '@/component/Header/Header'
import Footer from "@/component/Footer/Footer";
import style from './style.module.css'
import Image from "next/image";
import { useParams } from 'next/navigation';
import menuItems from '@/storage';


function Card() {

    const { id } = useParams()

    const result = menuItems.filter(el => el.id == id)

    function AddToBasket() {
        const data = JSON.parse(localStorage.getItem('arrayItems'))|| [];
        data.push(result[0])
        localStorage.setItem('arrayItems', JSON.stringify(data))
    }



    return (

        <>
            <Header></Header>
            <section className={style.background}>
                <div className={style.countainer}>
                    <div className={style.up}>
                        <div className={style.leftBlock}>
                            <Image
                                src={result[0].src}
                                alt=''
                            />
                        </div>
                        <div className={style.rightBlock}>
                            <div className={style.title}>
                                <h1>{result[0].name}</h1>
                                <p className={style.titletext}>{result[0].longDescription}</p>
                            </div>
                            <div className={style.size}>
                                <p className={style.sizeText}>Size</p>
                                <div className={style.sizeButtons}>
                                    {result[0].sizes.map(el =>
                                        <div className={style.sizeBut}>
                                            <p className={style.circle}>{el.size}</p>
                                            <p className={style.textB}>{el.quantity} {el.unit}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.down}>
                        <div className={style.price}>
                            <h1 className={style.total}>Total:</h1>
                            <h1 className={style.total}>${result[0].price}</h1>
                        </div>
                        <div className={style.underline}></div>
                        <div className={style.text}>
                            <div className={style.i}>
                                <p>i</p>
                            </div>
                            <p className={style.longtext}>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                        </div>
                        <a href="/basket">
                            <div className={style.button} onClick={AddToBasket}>
                            <h1>Add to Order</h1>
                        </div>
                        </a>
                        
                    </div>



                </div>


            </section>

            <Footer></Footer>
        </>

    );
}

export default Card;