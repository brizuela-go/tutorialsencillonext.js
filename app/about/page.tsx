async function getHello() {
  const res = await fetch(`http:localhost:3000/api/hello`, {
    cache: "no-cache",
  });
  return res.json();
}

type Hello = {
  message: string;
  bruh: string;
  lmao: string;
};

export default async function About() {
  const hello: Hello = await getHello();

  const { message, bruh, lmao } = hello;

  console.log(message);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-indigo-300 to-indigo-700">
      <h1 className="text-4xl tracking-tight font-bold">About {message}</h1>
      <p>{bruh}</p>
      <p>{lmao}</p>
    </div>
  );
}
