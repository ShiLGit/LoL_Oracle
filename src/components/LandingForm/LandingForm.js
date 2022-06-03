import { useState } from "react";

import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import ApiKeyForm from "./ApiKeyForm";
import SummonerForm from "./SummonerForm";
const LandingForm = () => {
	const [formType, setFormType] = useState("API_KEY");
	const computeFormType = () => {
		switch (formType) {
			case "SUMMONER":
				return <SummonerForm />;
			case "API_KEY":
				return <ApiKeyForm />;
		}
	};
	return (
		<Card sx={{ borderRadius: 0, margin: "15px", boxSizing: "border-box" }}>
			<CardContent sx={{ height: "60vh" }}>{computeFormType(formType)}</CardContent>
		</Card>
	);
};

export default LandingForm;
