import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        faq: resolve(__dirname, "faq.html"),
        privacy: resolve(__dirname, "privacy.html"),
        terms: resolve(__dirname, "terms.html"),
        etMain: resolve(__dirname, "et/index.html"),
        etFaq: resolve(__dirname, "et/faq.html"),
        etPrivacy: resolve(__dirname, "et/privacy.html"),
        etTerms: resolve(__dirname, "et/terms.html"),
      },
    },
  },
});
