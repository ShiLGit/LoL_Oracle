import axios, { AxiosError } from "axios";
const defaultFailCb = (err) => {
	alert(err.response.data);
	console.log(err.response.data);
};
const validateApiKey = (apiKey, successCallback, failureCallback = defaultFailCb) => {
	axios
		.post("http://localhost:8080/validate-key", apiKey)
		.then((res) => {
			console.log("Response from validateApiKey():", res);
			successCallback(res.data);
		})
		.catch((err) => {
			console.log("validateApiKey() failed:", err);
			failureCallback(err);
		});
};
const makePrediction = (requestData, successCallback, failureCallback = defaultFailCb) => {
	axios
		.post("http://localhost:8080/make-prediction", requestData)
		.then((res) => {
			console.log("Response from makePrediction(): ", res);
			successCallback(res.data);
		})
		.catch((err) => {
			console.log("makePrediction() failed:", err);
			failureCallback(err);
		});
};
export default { validateApiKey, makePrediction };
