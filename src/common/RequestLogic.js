import axios from "axios";
const validateApiKey = (apiKey, successCallback, failureCallback) => {
	axios
		.post("http://localhost:8080/validate-key", apiKey)
		.then((res) => {
			console.log("from validate-key:", res.data, res.data.error === "true");
			successCallback(res.data);
		})
		.catch((err) => {
			failureCallback(err);
		});
};

export default { validateApiKey };
