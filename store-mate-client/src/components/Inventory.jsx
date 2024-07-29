export function Inventory() {
  const inventoryItems = [
    {
      uid: 1,
      name: "Whole Wheat Bread",
      quantity: 200,
      costPrice: 40,
      sellingPrice: 60,
    },
    {
      uid: 2,
      name: "White Bread",
      quantity: 300,
      costPrice: 35,
      sellingPrice: 55,
    },
    {
      uid: 3,
      name: "Croissants",
      quantity: 150,
      costPrice: 50,
      sellingPrice: 80,
    },
    { uid: 4, name: "Cakes", quantity: 50, costPrice: 150, sellingPrice: 250 },
    { uid: 5, name: "Muffins", quantity: 250, costPrice: 30, sellingPrice: 50 },
    { uid: 6, name: "Cookies", quantity: 400, costPrice: 20, sellingPrice: 40 },
    {
      uid: 7,
      name: "Brownies",
      quantity: 100,
      costPrice: 50,
      sellingPrice: 90,
    },
    {
      uid: 8,
      name: "Fruit Tarts",
      quantity: 50,
      costPrice: 80,
      sellingPrice: 150,
    },
    { uid: 9, name: "Quiches", quantity: 75, costPrice: 60, sellingPrice: 120 },
    {
      uid: 10,
      name: "Sourdough Bread",
      quantity: 150,
      costPrice: 50,
      sellingPrice: 90,
    },
    {
      uid: 11,
      name: "Baguettes",
      quantity: 200,
      costPrice: 40,
      sellingPrice: 70,
    },
    {
      uid: 12,
      name: "Cinnamon Rolls",
      quantity: 100,
      costPrice: 45,
      sellingPrice: 80,
    },
    {
      uid: 13,
      name: "Fruit Cakes",
      quantity: 25,
      costPrice: 120,
      sellingPrice: 250,
    },
    {
      uid: 14,
      name: "Cheesecakes",
      quantity: 20,
      costPrice: 150,
      sellingPrice: 300,
    },
    {
      uid: 15,
      name: "Tiramisu",
      quantity: 30,
      costPrice: 100,
      sellingPrice: 200,
    },
    {
      uid: 16,
      name: "Macarons",
      quantity: 50,
      costPrice: 80,
      sellingPrice: 150,
    },
    {
      uid: 17,
      name: "Madeleines",
      quantity: 40,
      costPrice: 60,
      sellingPrice: 120,
    },
    {
      uid: 18,
      name: "Biscotti",
      quantity: 150,
      costPrice: 45,
      sellingPrice: 90,
    },
    {
      uid: 19,
      name: "Gingerbread",
      quantity: 75,
      costPrice: 50,
      sellingPrice: 100,
    },
    {
      uid: 20,
      name: "Fruit Buns",
      quantity: 100,
      costPrice: 40,
      sellingPrice: 80,
    },
    { uid: 21, name: "Scones", quantity: 150, costPrice: 35, sellingPrice: 70 },
    {
      uid: 22,
      name: "Mille-Feuille",
      quantity: 20,
      costPrice: 120,
      sellingPrice: 250,
    },
    {
      uid: 23,
      name: "Cream Puffs",
      quantity: 30,
      costPrice: 80,
      sellingPrice: 150,
    },
    {
      uid: 24,
      name: "Eclairs",
      quantity: 25,
      costPrice: 100,
      sellingPrice: 200,
    },
    {
      uid: 25,
      name: "Fruit Tarts",
      quantity: 50,
      costPrice: 60,
      sellingPrice: 120,
    },
    {
      uid: 26,
      name: "Chocolate Cake",
      quantity: 30,
      costPrice: 150,
      sellingPrice: 300,
    },
    {
      uid: 27,
      name: "Red Velvet Cake",
      quantity: 20,
      costPrice: 180,
      sellingPrice: 350,
    },
    {
      uid: 28,
      name: "Carrot Cake",
      quantity: 25,
      costPrice: 100,
      sellingPrice: 200,
    },
    {
      uid: 29,
      name: "Banana Bread",
      quantity: 100,
      costPrice: 40,
      sellingPrice: 80,
    },
    {
      uid: 30,
      name: "Coffee Cake",
      quantity: 150,
      costPrice: 50,
      sellingPrice: 100,
    },
    {
      uid: 31,
      name: "Apple Pie",
      quantity: 20,
      costPrice: 100,
      sellingPrice: 200,
    },
    {
      uid: 32,
      name: "Pecan Pie",
      quantity: 15,
      costPrice: 120,
      sellingPrice: 200,
    },
    {
      uid: 33,
      name: "Chocolate Muffins",
      quantity: 200,
      costPrice: 35,
      sellingPrice: 60,
    },
    {
      uid: 34,
      name: "Blueberry Muffins",
      quantity: 250,
      costPrice: 30,
      sellingPrice: 55,
    },
    {
      uid: 35,
      name: "Cinnamon Swirl Buns",
      quantity: 150,
      costPrice: 40,
      sellingPrice: 75,
    },
    {
      uid: 36,
      name: "Fruit and Nut Cake",
      quantity: 20,
      costPrice: 150,
      sellingPrice: 300,
    },
    {
      uid: 37,
      name: "Lemon Bars",
      quantity: 30,
      costPrice: 50,
      sellingPrice: 90,
    },
    {
      uid: 38,
      name: "Raspberry Tarts",
      quantity: 25,
      costPrice: 60,
      sellingPrice: 120,
    },
    {
      uid: 39,
      name: "Chocolate Dipped Shortbread",
      quantity: 100,
      costPrice: 40,
      sellingPrice: 80,
    },
    {
      uid: 40,
      name: "Vanilla Cupcakes",
      quantity: 200,
      costPrice: 30,
      sellingPrice: 60,
    },
  ];
  return (
    <div className="bg-white flex flex-col p-2 md:p-4 m-4 md:m-8 rounded-lg">
      <div className="flex">
        <div className="flex-none">
          <p className="text-lg md:text-xl font-bold p-2 underline">
            INVENTORY
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-700 hover:text-white">
            ADD
          </button>
        </div>
      </div>
    {/* <div className=""> */}
      <table className="border-collapse border border-slate-400">
        <thead>
          <tr className="items-center">
            <th className="border border-slate-300">Id</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Quantity</th>
            <th className="border border-slate-300">Cost Price</th>
            <th className="border border-slate-300">Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map((item, index) => {
            const { name, quantity, costPrice, sellingPrice } = item;
            return (
              <tr className="items-center text-center" key={index}>
                <td className="border border-slate-300">{index + 1}</td>
                <td className="border border-slate-300">{name}</td>
                <td className="border border-slate-300">{quantity}</td>
                <td className="border border-slate-300">{costPrice}</td>
                <td className="border border-slate-300">{sellingPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </div> */}
    </div>
  );
}
