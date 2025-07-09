import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import style from './style.module.css'
import Image from "next/image";
import menuItems from '@/storage';



function Menu() {



    return ( 

        <div>
            <Header></Header>
            <section className={style.menuBlock}>
                <h1>Our Menu</h1>
                <p className={style.maintext}>We consider all the drivers of change gives you the components <br/> you need to change to create a truly happens.</p>
                <div className={style.buttonsBlock}>
                    <div className={style.but}>
                        <div>
                            <p>🍱</p>
                        </div>
                        <p>ALL</p>
                    </div>
                    <div className={style.but}>
                        <div>
                            <p>☕</p>
                        </div>
                        <p>Lemonade</p>
                    </div>
                    <div className={style.but}>
                        <div>
                            <p>🥙</p>
                        </div>
                        <p>Main courses</p>
                    </div>
                    <div className={style.but}>
                        <div>
                            <p>🍰</p>
                        </div>
                        <p>Dessert</p>
                    </div>
                </div>
                <div className={style.cardsEat}>
                    {menuItems.map((el, index)=> 
                    <a href={`/menu/${el.id}`} key={index}>
                      <div className={style.card}>
                        <Image
                        src={el.src}
                        alt=""
                        />
                        <h2>{el.price}</h2>
                        <p className={style.titleCard}>{el.name}</p>
                        <p className={style.textCard}>{el.description}</p>
                    </div>
                    </a> )}
                </div>
    
            </section>



            <Footer></Footer>
        </div>
        
     );
}

export default Menu;