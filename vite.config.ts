import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	base: "/disney-plus-clone/",
	plugins: [react()],
});
