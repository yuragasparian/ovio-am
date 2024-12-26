import Dropdown from "rc-dropdown";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import React, { useContext } from "react";

export default function MenuBar() {
  const menus = {
    "Հատուկ առաջարկներ": {
      Բոլորը: [],
      ԿինոՏոն: [],
      "3 ամիս 50% զեղչ": [],
      "PowerPlay խաղային ծառայություն": [],
      "Ուրախ շաբաթ-կիրակի": [],
      "OVIO - Վեգա": [],
    },

    "Տան համար": {
      Բոլորը: [],
      "Wink TV հարթակ": [],
      "All in փաթեթներ": [],
      Տեսահսկում: [],
      Ինտերնետ: [],
      "Սմարթ հեռուստատեսություն": [],
      Հեռախոսակապ: [],
    },

    "Բիզնեսի համար": {
      Բոլորը: [],

      "Տվյալների մշակման կենտրոն": [
        "Տվյալների մշակման կենտրոնի մասին",
        "OVIO Cloud",
        "Colocation",
        "Դոմեն",
        "Հոսթինգ",
      ],
      Ինտերնետ: [
        "Երաշխավորված ինտերնետ",
        "Mono Office ինտերնետ",
        "Տվյալների փոխանցում",
        "Wi-Fi Promo",
      ],
      "Տեսահսկում և տեսավերլուծություն": [
        "Տեսահսկում բիզնեսի համար",
        "Տեսահսկում պատվերների ստացման կետեր",
      ],
      "Սմարթ TV": ["Wink կորպորատիվ", "Wink TV Office", "Wink Hotels"],

      "Հեռախոսակապի ծառայություններ": [
        "Կորպորատիվ հեռախոսակապ",
        "SOHO հեռախոսակապ",
        "Քառանիշ համար",
        "Cloud ԱՀԿ",
        "Վիրտուալ ԱՀԿ",
        "Free Phone",
      ],

      Օպերատորներ: {},
    },
    "Մեր մասին": {},

    Վճարել: {},

    Օգնություն: {},
  };

  function onSelect({ key }) {
    console.log(`${key} selected`);
  }

  function onVisibleChange(visible) {
    console.log(visible);
  }

  const menuCallback = (menuObject) => (
    <>
      <Menu onSelect={onSelect} className="cursor-pointer">
        {menuObject.map((menu, i) => (
          <MenuItem
            key={i}
            className="hover:text-[#53079d] transition-colors duration-200 text-base my-3 px-5"
          >
            {menu}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <div>
      <div>
        {Object.keys(menus).map((m, i) => (
          <Dropdown
            key={i}
            trigger={["hover"]}
            overlay={menuCallback(Object.keys(menus[m]))}
            animation="slide-up"
            onVisibleChange={onVisibleChange}
          >
            <button className="px-3 font-bold text-base hover:text-[#53079d] transition-colors duration-200">
              {m}
            </button>
          </Dropdown>
        ))}
      </div>
    </div>
  );
}
