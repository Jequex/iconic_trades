import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "./sanity/schemas";
// import { visionTool } from "@sanity/vision";

export const config = defineConfig({
  name: "default",
  title: "iconic-trade-admin",

  projectId: "3exmkxl1",
  dataset: "production",

  apiVersion: "2023-03-03",
  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
});
