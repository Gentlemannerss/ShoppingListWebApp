export default async function (context, req) {
  const list = {
    items: ["Milk", "Eggs"]
  };

  context.res = {
    status: 200,
    body: list
  };
};
