import prisma from "@/lib/client";

export async function POST(req: Request) {
  const { name, description, price, image } = await req.json();

  const food = await prisma.food.create({
    data: {
      name,
      description,
      price,
      createdAt: new Date(),
      image,
    },
  });

  return Response.json(food);
}
