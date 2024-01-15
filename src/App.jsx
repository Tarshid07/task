import { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
  ]);
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const filterItems = () => {
    return items.filter(
      (item) =>
        item.toLowerCase().includes(inputValue.toLowerCase()) &&
        !selectedItems.includes(item)
    );
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const selectItem = (item) => {
    setSelectedItems([...selectedItems, item]);
    setInputValue("");
  };

  const removeChip = (item) => {
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem !== item)
    );
  };

  useEffect(() => {
    filterItems();
  }, [inputValue]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col">
      <div className="flex flex-wrap mb-4">
        {selectedItems.map((item) => (
          <div
            key={item}
            className="bg-blue-200 rounded-full px-3 py-1 m-1 flex items-center">
            <span className="text-blue-800 mr-2">{item}</span>
            <button onClick={() => removeChip(item)} className="text-red-500">
              X
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <ul className="list-none p-0 mt-2">
        {filterItems().map((item) => (
          <li
            key={item}
            onClick={() => selectItem(item)}
            className="cursor-pointer p-2 hover:bg-gray-200">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;