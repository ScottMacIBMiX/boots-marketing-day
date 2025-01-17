/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AIRTABLE_ACCESS_TOKEN:
      process.env.AIRTABLE_ACCESS_TOKEN || "default_access_token",
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID || "default_base_id",
    PASSKEY: process.env.PASSKEY || "default_passkey",
  },
};

export default nextConfig;
