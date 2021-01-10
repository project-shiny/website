import * as I from "@material-ui/icons"

export const navItems: NavItem[] = [
  { name: "Home", link: "/", icon: I.HomeOutlined },
  { name: "Team", link: "/team", icon: I.AccountCircleOutlined },
  { name: "Showcase", link: "/showcase", icon: I.PhotoOutlined },
  { name: "Devices", link: "/devices", icon: I.PhoneAndroidOutlined },
]

export type NavItem = {
  name: string
  link: string
  icon: I.SvgIconComponent
}
