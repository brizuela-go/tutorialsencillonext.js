async function getFood(id: string) {
  const res = await fetch(`http://localhost:3000/api/food/getFood/${id}`, {
    cache: "no-cache",
  });
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

export default async function Food({ params }: { params: { id: string } }) {
  const food: Food = await getFood(params.id);

  console.log(food);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center p-10 bg-white shadow-2xl my-10 text-black gap-8 rounded-lg">
        <h1 className="text-3xl font-semibold">{food.name}</h1>

        <img src={food.image} alt={food.name} width={100} height={100} />
        <p>{food.description}</p>
        <p>${food.price}</p>
      </div>
    </div>
  );
}
