import { useState, useContext, useEffect } from "react";
import { SUMMONER_FORM, APIKEY_FORM, APIKEY } from "../../common/constants";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import ApiKeyForm from "./ApiKeyForm";
import SummonerForm from "./SummonerForm";
import Cookies from "js-cookie";
import RequestLogic from "../../common/RequestLogic";
import LoadMsg from "./LoadMsg";
import { shadows } from '@mui/system';


const LandingForm = () => {
	const [validatingKey, setValidatingKey] = useState(false);
	const [formType, setFormType] = useState();

	//check cookies for a valid key on initial load of site
	useEffect(() => {
		console.log(Cookies.get(APIKEY));
		if (Cookies.get(APIKEY)) {
			setValidatingKey(true);
			RequestLogic.validateApiKey(Cookies.get(APIKEY), validateSuccess, validateFail);
			setFormType(SUMMONER_FORM);
		} else {
			setFormType(APIKEY_FORM);
		}
	}, []);
	const validateSuccess = (resData) => {
		setValidatingKey(false);
		if (resData.error === "true") {
			setFormType(APIKEY_FORM);
		} else {
			setFormType(SUMMONER_FORM);
		}
		alert(resData.message);
	};
	const validateFail = (err) => {
		console.log(err);
		setValidatingKey(false);
		alert("Unexpected error occurred: " + err);
		setFormType(APIKEY_FORM);
	};

	const computeFormType = () => {
		switch (formType) {
			case SUMMONER_FORM:
				return <SummonerForm setFormType={setFormType} />;
			case APIKEY_FORM:
				return <ApiKeyForm setFormType={setFormType} />;
		}
	};
	return (
		<Card sx={{ borderRadius: 0, margin: "15px", boxSizing: "border-box", boxShadow: 3 }}>
			<CardContent sx={{ height: "80vh"}}>
				{validatingKey ? <LoadMsg msg={"API key detected. Validating..."} /> : computeFormType(formType)}
			</CardContent>
		</Card>
	);
};

export default LandingForm;
