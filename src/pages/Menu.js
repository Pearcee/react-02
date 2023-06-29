// import Tabs from "../components/TabComponent/Tabs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
import Data from "./menu.csv";
import Papa from "papaparse";

function Food(props) {
  const price = props.price;
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  });
  return (
    <>
      <h1>
        {props.item}
        <span className="w3-right w3-tag w3-dark-grey w3-round">
          {USDollar.format(price)}
        </span>
      </h1>
      <p className="w3-text-grey">{props.ingredients}</p>
      <hr />
    </>
  );
}

const Menu = () => {
  // <!-- Menu Container -->
 
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);

  var pizza = data.filter(function (pilot) {
    return pilot.Menu === "Pizza";
  });
  var salad = data.filter(function (pilot) {
    return pilot.Menu === "Salads";
  });
  var starter = data.filter(function (pilot) {
    return pilot.Menu === "Starter";
  });

  return (
    <div className="w3-container">
      <br />
      <h1 className="w3-center w3-jumbo">THE MENU</h1>

      <Tabs>
        <TabList className="w3-bar w3-black">
          <Tab className="w3-bar-item w3-button">Starter</Tab>
          <Tab className="w3-bar-item w3-button">Pizza</Tab>
          <Tab className="w3-bar-item w3-button">Salad</Tab>
        </TabList>
        <TabPanel>
          {starter.map((row, index) => (
            <Food
              key={row.id}
              item={row.Item}
              price={row.Price}
              ingredients={row.Ingredients}
            />
          ))}
        </TabPanel>
        <TabPanel className="">
          {pizza.map((row, index) => (
            <Food
              key={row.id}
              item={row.Item}
              price={row.Price}
              ingredients={row.Ingredients}
            />
          ))}
        </TabPanel>
        <TabPanel>
          <>
          {salad.map((row, index) => (
            <Food
              key={row.id}
              item={row.Item}
              price={row.Price}
              ingredients={row.Ingredients}
            />
            
          ))}
          </>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Menu;

//
/* 
      // <!-- Menu Container -->
<div className="w3-container w3-black w3-padding-64 w3-xxlarge" id="menu">
  <div className="w3-content">

    <h1 className="w3-center w3-jumbo" style="margin-bottom:64px">THE MENU</h1>
    <div className="w3-row w3-center w3-border w3-border-dark-grey">
      <a href="javascript:void(0)" onclick="openMenu(event, 'Pizza');" id="myLink">
        <div className="w3-col s4 tablink w3-padding-large w3-hover-red">Pizza</div>
      </a>
      <a href="javascript:void(0)" onclick="openMenu(event, 'Pasta');">
        <div className="w3-col s4 tablink w3-padding-large w3-hover-red">Salads</div>
      </a>
      <a href="javascript:void(0)" onclick="openMenu(event, 'Starter');">
        <div className="w3-col s4 tablink w3-padding-large w3-hover-red">Starter</div>
      </a>
    </div>

    <div id="Pizza" className="w3-container menu w3-padding-32 w3-white">
      <h1><b>Margherita</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$12.50</span></h1>
      <p className="w3-text-grey">Fresh tomatoes, fresh mozzarella, fresh basil</p>
      <hr>

        <h1><b>Formaggio</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$15.50</span></h1>
        <p className="w3-text-grey">Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)</p>
        <hr>

          <h1><b>Chicken</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$17.00</span></h1>
          <p className="w3-text-grey">Fresh tomatoes, mozzarella, chicken, onions</p>
          <hr>

            <h1><b>Pineapple'o'clock</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$16.50</span></h1>
            <p className="w3-text-grey">Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil</p>
            <hr>

              <h1><b>Meat Town</b> <span className="w3-tag w3-red w3-round">Hot!</span><span className="w3-right w3-tag w3-dark-grey w3-round">$20.00</span></h1>
              <p className="w3-text-grey">Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken</p>
              <hr>

                <h1><b>Parma</b> <span className="w3-tag w3-grey w3-round">New</span><span className="w3-right w3-tag w3-dark-grey w3-round">$21.50</span></h1>
                <p className="w3-text-grey">Fresh tomatoes, mozzarella, parma, bacon, fresh arugula</p>
              </div>

              <div id="Pasta" className="w3-container menu w3-padding-32 w3-white">
                <h1><b>Lasagna</b> <span className="w3-tag w3-grey w3-round">Popular</span> <span className="w3-right w3-tag w3-dark-grey w3-round">$13.50</span></h1>
                <p className="w3-text-grey">Special sauce, mozzarella, parmesan, ground beef</p>
                <hr>

                  <h1><b>Ravioli</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$14.50</span></h1>
                  <p className="w3-text-grey">Ravioli filled with cheese</p>
                  <hr>

                    <h1><b>Spaghetti Classica</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$11.00</span></h1>
                    <p className="w3-text-grey">Fresh tomatoes, onions, ground beef</p>
                    <hr>

                      <h1><b>Seafood pasta</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$25.50</span></h1>
                      <p className="w3-text-grey">Salmon, shrimp, lobster, garlic</p>
                    </div>


                    <div id="Starter" className="w3-container menu w3-padding-32 w3-white">
                      <h1><b>Today's Soup</b> <span className="w3-tag w3-grey w3-round">Seasonal</span><span className="w3-right w3-tag w3-dark-grey w3-round">$5.50</span></h1>
                      <p className="w3-text-grey">Ask the waiter</p>
                      <hr>

                        <h1><b>Bruschetta</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$8.50</span></h1>
                        <p className="w3-text-grey">Bread with pesto, tomatoes, onion, garlic</p>
                        <hr>

                          <h1><b>Garlic bread</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$9.50</span></h1>
                          <p className="w3-text-grey">Grilled ciabatta, garlic butter, onions</p>
                          <hr>

                            <h1><b>Tomozzarella</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$10.50</span></h1>
                            <p className="w3-text-grey">Tomatoes and mozzarella</p>
                          </div><br>

                          </div>
                        </div>
*/
