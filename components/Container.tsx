import {
  AppBar,
  Toolbar,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Drawer,
  List,
  useTheme,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import * as I from "@material-ui/icons"
import { useState, useEffect } from "react"
import { navItems } from "@utils"
import { useRouter } from "next/router"

const drawerWidth = 300

type Props = {
  children: React.ReactNode
  className: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      color: theme.palette.text.primary,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
)

export function Container({ children, className }: Props) {
  const classes = useStyles()
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)")
    query.onchange = (e) => {
      setIsOpen(!e.matches)
    }
    setIsOpen(!query.matches)
  }, [])

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={`${classes.appBar} ${isOpen && classes.appBarShift}`}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={`${classes.menuButton} ${isOpen && classes.hide}`}
            color="inherit"
            aria-label="menu"
            onClick={toggleOpen}
          >
            <I.Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            RetardOS
          </Typography>
          <IconButton color="inherit" aria-label="icon">
            <I.CloudDownloadOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleOpen} color="inherit">
            {theme.direction === "ltr" ? <I.ChevronLeft /> : <I.ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={index} onClick={() => router.push(item.link)}>
              <ListItemIcon>
                <item.icon style={{ color: theme.palette.text.primary }} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <main
        className={`${className} ${classes.content} ${
          isOpen && classes.contentShift
        }`}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  )
}
