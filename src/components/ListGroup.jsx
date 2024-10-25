import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //this is a hook function, allows you to utilize built in functions
  //this component can have data that may change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

//A component can only return one element, so to add
// the header, you can wrap with an abbreviation div.
//Better way is to create a fragment because it doesn't add
//an element to appease react. So you can just use <>
//render a list dynamically by using a const
//and an arrow function and convert an item to
//an li element

//dynamic header using && operator shows second value if something is true
//if false, it doesn't show anything...line 8

//Map method is used on an array to iterate over each
//element and apply a function to each one.

export { ListGroup };
