import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
const ValidateKeyLoadMsg = ({ msg }) => {
	return (
		<Grid container direction='column' spacing={12} justifyContent='center'>
			<Grid item>
				<Typography variant='h3' textAlign={"center"} sx={{ marginTop: "200px" }}>
					{msg}
				</Typography>
			</Grid>
			<Grid item>
				<LinearProgress sx={{ maxWidth: "80%", margin: "auto", textAlign: "center" }} />
			</Grid>
		</Grid>
	);
};

export default ValidateKeyLoadMsg;
