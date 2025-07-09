'use client';

import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import { useEffect, useState } from "react";
import style from './style.module.css';
import Image from "next/image";

function Basket() {

    const [card, setCard] = useState([])


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('arrayItems'))
        setCard(data)
        console.log(data);

    }, []);




    return (


        <>
            <Header></Header>
            <section className={style.background}>
                <h1>Basket</h1>
                <div>
                    <div className={style.cardsEat}>
                        {card.map((el, index) =>
                            <div className={style.card} key={index}>
                                <Image
                                    src={el.src}
                                    alt=""
                                />
                                <h2>{el.price}</h2>
                                <p className={style.titleCard}>{el.name}</p>
                                <p className={style.textCard}>{el.description}</p>
                            </div>)}
                    </div>
                    
                </div>
                {card.length > 0? <button onClick={()=> {
                    localStorage.setItem('arrayItems', JSON.stringify([]))
                    setCard([])
                }}> Clear Basket</button>:null}
            </section>


            <Footer></Footer>


        </>
    );
}

export default Basket;