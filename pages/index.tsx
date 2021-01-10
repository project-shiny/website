import { makeStyles, createStyles, Typography } from "@material-ui/core"
import { Container } from "@components"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: "center",
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
    </Container>
  )
}
