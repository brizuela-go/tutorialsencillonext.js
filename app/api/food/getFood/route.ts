import prisma from "@/lib/client";

export async function GET() {
  // if token is valid, return food
  const food = await prisma.food.findMany();
  return Response.json(food);
}
