import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Ship a minimal self-contained server for Docker/Dokploy deploys.
  output: "standalone",
};

export default withNextIntl(nextConfig);
