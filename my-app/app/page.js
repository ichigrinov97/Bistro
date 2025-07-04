import Image from "next/image";
import Header from '../component/Header/Header'
import style from '../app/style.module.css'
import breakfast from '../public/breakfast.svg'
import main from '../public/main.svg'
import drinks from '../public/drinks.svg'
import desserts from '../public/desserts.svg'
import caterings from '../public/caterings.svg'
import birthday from '../public/birthday.svg'
import wedding from '../public/wedding.svg'
import friends from '../public/friends.svg'
import Footer from "@/component/Footer/Footer";

const menu = [
  {
    src: breakfast,
    name: "Breakfast",
    description: "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    src: main,
    name: "Main Dishes",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    src: drinks,
    name: "Drinks",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    src: desserts,
    name: "Desserts",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  }
];
const party = [
  {
    src: caterings,
    name: "Caterings",
    description: "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    src: birthday,
    name: "Birthdays",
    description: "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    src: wedding,
    name: "Weddings",
    description: "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    src: friends,
    name: "Events",
    description: "In the new era of technology we look in the future with certainty and pride for our life."
  }
];




export default function Home() {



  return (
    <div>
      <Header></Header>
      <main>
        <section className={style.background1}>
          <div className={style.countainerMain}>
            <h1>Best food for
              your taste</h1>
            <p>Discover delectable cuisine and unforgettable moments<br />
              in our welcoming, culinary haven.</p>
            <div className={style.actionsOnMain}>
              <button className={style.redButton}>Book A Table</button>
              <button className={style.whiteButton}>Explore Menu</button>
            </div>
          </div>
        </section>

        <section className={style.background2}>
          <h1 className={style.title}>Browse Our Menu</h1>
          <div className={style.countainerBlock}>
            {menu.map(el => <div>
              <Image
                src={el.src}
                alt=""
              />
              <h1>{el.name}</h1>
              <p>{el.description}</p>
              <button>Explore Menu</button>
            </div>)}
          </div>
        </section>

        <section className={style.background3}>
          <div className={style.allItems}>
            <h1>We also offer unique <br />services for your events</h1>
            <div className={style.blocks}>
              {party.map(el => <div>
                <Image
                  src={el.src}
                  alt=""
                />
                <h2>{el.name}</h2>
                <p>{el.description}</p>
              </div>)}
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
