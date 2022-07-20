import { useState, useContext } from "react";
import { SUMMONER_FORM, APIKEY_FORM } from "../../common/constants";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import ApiKeyForm from "./ApiKeyForm";
import SummonerForm from "./SummonerForm";
import ApiKeyContext from "../../common/ApiKeyContext";
const LandingForm = () => {
	const apiKeyContext = useContext(ApiKeyContext);
	const [formType, setFormType] = useState(apiKeyContext.apiKey ? SUMMONER_FORM : APIKEY_FORM);
	const computeFormType = () => {
		switch (formType) {
			case SUMMONER_FORM:
				return <SummonerForm setFormType={setFormType} />;
			case APIKEY_FORM:
				return <ApiKeyForm setFormType={setFormType} />;
		}
	};
	return (
		<Card sx={{ borderRadius: 0, margin: "15px", boxSizing: "border-box" }}>
			<CardContent sx={{ height: "60vh" }}>{computeFormType(formType)}</CardContent>
		</Card>
	);
};

export default LandingForm;
