import Link from "next/link";

async function getFood() {
  const res = await fetch(
    "https://tutorialsencillonext-js.vercel.app/api/food/getFood",
    {
      cache: "no-cache",
    }
  );
  const food = await res.json();
  return food;
}

type Food = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export default async function Food() {
  const food: Food[] = await getFood();

  return (
    <div>
      <h1>Food</h1>
      <p>Here are some foods</p>
      <ul className="grid grid-cols-3 gap-8">
        {food.map((f) => (
          <Link
            href={`/food/${f.id}`}
            className="bg-white text-black tracking-tight rounded-lg text-center p-10 shadow-2xl gap-8 hover:bg-emerald-500 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            key={f.id}
          >
            <h2 className="text-3xl font-semibold">{f.name}</h2>
            <img src={f.image} alt={f.name} />
            <p>{f.description}</p>
            <p>${f.price}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
