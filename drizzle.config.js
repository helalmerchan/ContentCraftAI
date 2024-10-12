// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://timestampstyv_owner:jsmfdtU2VR1e@ep-yellow-band-a12k8no5.ap-southeast-1.aws.neon.tech/SMContentGenSaaS?sslmode=require",
    connectionString:
      "postgresql://timestampstyv_owner:jsmfdtU2VR1e@ep-yellow-band-a12k8no5.ap-southeast-1.aws.neon.tech/SMContentGenSaaS?sslmode=require",
  },
};
