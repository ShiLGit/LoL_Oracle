import { createContext } from "react";
const apiKeyContext = createContext({
	apiKey: "",
	setKey: () => {}
});

export default apiKeyContext;
