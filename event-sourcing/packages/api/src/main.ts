
import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify({ maxParamLength: 5000 });

app.register(cors, { origin: "*" });


(async () => {
  try {
    const address = 5000;
    await app.listen({ port: address });
    console.log(`server listening on ${address}`)
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();