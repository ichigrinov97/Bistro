import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import style from './style.module.css'
import Image from "next/image";
import Eggs from '../../public/eggs.svg'
import Burger from '../../public/burger.svg'
import Cake from '../../public/cake.svg'
import Cocktail from '../../public/coctail.svg'
import Coffe from '../../public/coffe.svg'
import Pancake from '../../public/pancakes.svg'
import Pizza from '../../public/pizza.svg'
import Lemonade from '../../public/lemonade.svg'


const products = [
  {
    src: Eggs,
    price: "$ 9.99",
    name: "Fried Eggs",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    src: Pizza,
    price: "$ 15.99",
    name: "Hawaiian Pizza",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    src: Cocktail,
    price: "$ 7.25",
    name: "Martinez Cocktail",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    src: Cake,
    price: "$ 20.99",
    name: "Butterscotch Cake",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    src: Lemonade,
    price: "$ 5.89",
    name: "Mint Lemonade",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    src: Coffe,
    price: "$ 18.05",
    name: "Chocolate Icecream",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    src: Burger,
    price: "$ 12.55",
    name: "Cheese Burger",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    src: Pancake,
    price: "$ 12.99",
    name: "Classic Waffles",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  }
];



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
                    {products.map(el=> 
                    <div className={style.card}>
                        <Image
                        src={el.src}
                        alt=""
                        />
                        <h2>{el.price}</h2>
                        <p className={style.titleCard}>{el.name}</p>
                        <p className={style.textCard}>{el.description}</p>
                    </div> )}
                </div>
    
            </section>



            <Footer></Footer>
        </div>
        
     );
}

export default Menu;