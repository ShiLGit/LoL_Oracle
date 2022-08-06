import axios, { AxiosError } from "axios";
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
const makePrediction = (requestData, successCallback, failureCallback) => {
	axios
		.post("http://localhost:8080/make-prediction", requestData)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};
export default { validateApiKey, makePrediction };
