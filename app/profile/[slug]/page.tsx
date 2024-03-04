import Product from "@/types/Product";

async function getProducts(slug: string) {
  const res = await fetch(`https://dummyjson.com/products/${slug}`);
  return res.json();
}

export default async function ProfileId({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const products: Product = await getProducts(slug);

  console.log(products);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-indigo-300 to-indigo-700">
      <div className="flex flex-col gap-4 p-4">
        <h1>{products.title}</h1>
        <p>{products.description}</p>
        <p>{products.price}</p>
        <div className="grid grid-cols-2">
          {products.images.map((img) => (
            <img key={products.id} src={img} alt={products.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
