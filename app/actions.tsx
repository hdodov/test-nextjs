"use server";

export const serverAction = async () => {
  console.log("Calling the form action");
  await new Promise((resolve) => setTimeout(resolve, 250));
  return "hello";
};
