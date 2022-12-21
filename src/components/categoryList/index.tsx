import { useNavigate } from "react-router-dom";

export default function CategoryList() {
  const navigate = useNavigate();
  const handleWomanPagesAll = () => {
    navigate("/womens");
  };
  const handleManPAgesAll = () => {
    navigate("/mens");
  };
  return (
    <div>
      <div className="globalContainer1">
        <img src="https://lp.weekday.com/app006prod?set=width[1280],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2022/wk50/1_HERO_SP_PRESPRING_PART2.png]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]" />
        <div className="container1">
          <h1>CHASING SUNRISE</h1>
          <p>Explore our first drop of the new season</p>
          <button onClick={handleWomanPagesAll}>WOMEN'S LATEST</button>
          <button onClick={handleManPAgesAll}>MEN'S LATEST</button>
        </div>
      </div>
      <div className="globalContainer1">
        <img src="https://lp.weekday.com/app006prod?set=width[1280],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2022/wk50/Hero_2_SP_Basics_Desktop_Part2.png]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]" />
        <div className="container1">
          <h1>HUGS ARE BASIC</h1>
          <p>Embrace your basic needs in these elevated wardrobe essentials.</p>
          <button onClick={handleWomanPagesAll}>SHOP WOMEN'S BASICS</button>
          <button onClick={handleManPAgesAll}>SHOP MEN'S BASICS</button>
        </div>
      </div>
      <div className="globalContainer1">
        <img src="https://lp.weekday.com/app006prod?set=width[1280],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2022/wk48/GiftGiving_HERO.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]" />
        <div className="container1">
          <h1>ENTER THE GIFT SHOP</h1>
          <p>Explore curated items for you and everyone on your list.</p>
          <button onClick={handleWomanPagesAll}>GIFTS FOR HER</button>
          <button onClick={handleManPAgesAll}>GIFTS FOR HIM</button>
        </div>
      </div>
      <div className="globalContainer1">
        <img src="https://lp.weekday.com/app006prod?set=width[1280],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2022/wk44/Hero1_SP_PartyWinter_01.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]" />
        <div className="container1">
          <h1>FESTIVE FEATURES</h1>
          <p>Nail that New Year’s look.</p>
          <button onClick={handleWomanPagesAll}>WOMEN'S PARTY</button>
          <button onClick={handleManPAgesAll}>MEN'S PARTY</button>
        </div>
      </div>
      <div className="globalContainer2">
        <img src="https://lp.weekday.com/app006prod?set=width[800],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/campaign/2021/responsibility/startpage/responsibility_startpage_mobile1.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]" />
        <div className="container2">
          <h1>This is our Responsibility</h1>
          <p>Want to learn more about our sustainability commitments?</p>
          <button onClick={handleWomanPagesAll}>CLICK HERE</button>
        </div>
      </div>
      <div className="globalContainer3">
        <img src="https://lp.weekday.com/app006prod?set=width[1280],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2021/w22/StartPage_Weekday_Store-Locator_desktop.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]" />
        <div className="container3">
          <button onClick={handleWomanPagesAll}>FIND A STORE</button>
        </div>
      </div>
    </div>
  );
}
