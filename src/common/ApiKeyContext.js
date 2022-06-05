import { createContext } from "react";
const apiKeyContext = createContext({
	apiKey: "",
	setKey: () => {},
	timeout: null,
	setTimeout: () => {}
});

export default apiKeyContext;
