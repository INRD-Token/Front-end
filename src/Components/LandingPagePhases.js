import Typography from "@mui/material/Typography";
//import Spin from 'react-reveal/Spin';
export default function LandingPagePhases() {
    const styles = {
        main: {
            margin:"5px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
        },
        phases: {
            marginTop:"150px",
          //marginTop:"400px",
          // display: "flex",
          // flexDirection: "row",
          // justifyContent: "space-around",
          marginLeft:"15px",
          display: "grid",
          gridTemplateColumns: "3fr 3fr 3fr",
          gridAutoFlow: "row",
        },
        phase:{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          fontWeight:"bold"
        }
      };
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                        PHASES
            </Typography>
            <div style={styles.phases}>
                <div style={styles.phase}>
                    <Typography variant="h3" gutterBottom>
                        Phase1:
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Embryo
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Q2 2023
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Building the base product
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Custodian bank, Dapp
                    </Typography>
                </div>
                <div style={styles.phase}>
                    <Typography variant="h3" gutterBottom>
                        Phase2:
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Baby steps
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Q3 2023
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Creating trust with backers & partnerships
                    </Typography>
                </div>
                <div style={styles.phase}>
                    <Typography variant="h3" gutterBottom>
                        Phase3:
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Growing up
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Q4 2023
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Scaling up the product integrations & community adoption
                    </Typography>
                </div>
            </div>
        </div>
    )
}