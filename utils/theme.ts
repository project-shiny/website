import { createMuiTheme } from "@material-ui/core/styles"
import { blue, common } from "@material-ui/core/colors"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#232530",
    },
    secondary: {
      main: blue[500],
    },
    background: {
      default: "#1C1E26",
    },
    text: {
      primary: common.white,
    },
  },
  typography: {
    fontFamily: "'Space Mono', monospace",
  },
})
