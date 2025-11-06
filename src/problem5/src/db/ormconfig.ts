import { DataSource } from "typeorm";
import { Resource } from "../entities/Resource";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "user",
  password: process.env.DB_PASS || "pass",
  database: process.env.DB_NAME || "expressdb",
  entities: [Resource],
  synchronize: true, // dev
  logging: false,
  extra: {
    // options: '-c "uuid_generate_v4()"',
  },
});
