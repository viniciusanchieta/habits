import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify();

app.register(cors)

app.get("/", () => {
  return { hello: "world" };
});

app.listen({
  port: 3333
});