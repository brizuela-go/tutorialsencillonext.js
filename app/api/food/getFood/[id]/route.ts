import prisma from "@/lib/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const slug = params.id;

  const food = await prisma.food.findUnique({
    where: {
      id: slug,
    },
  });

  return Response.json(food);
}
