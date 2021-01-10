import { makeStyles, createStyles, Typography } from "@material-ui/core"
import { Container } from "@components"
import { strings } from "@utils"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: "center",
      padding: "2rem",
    },
    features: {
      marginTop: "1rem",
      whiteSpace: "pre",
      textAlign: "start",
    },
    content: {
      textAlign: "start",
    },
  })
)

export default function index() {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography variant="h5" style={{ marginTop: "5rem" }}>
        RetardOS
      </Typography>
      <Typography variant="h6">Retardation Reimagined.</Typography>

      <div className={classes.content}>
        <Typography
          variant="h3"
          style={{ marginTop: "8rem", fontSize: "1.8rem" }}
        >
          Features
        </Typography>
        <Typography paragraph className={classes.features}>
          {strings.features}
        </Typography>
      </div>
    </Container>
  )
}
