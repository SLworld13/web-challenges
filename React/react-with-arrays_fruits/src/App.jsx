import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 101, name: "Banana", color: "brown" },
    { id: 202, name: "Apple", color: "red" },
    { id: 303, name: "Watermelon", color: "green" },
    { id: 404, name: "Grape", color: "purple" },
    { id: 505, name: "Lemon", color: "yellow" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
