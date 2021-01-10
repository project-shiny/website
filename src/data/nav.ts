import {
  mdiHomeOutline,
  mdiInformationOutline,
  mdiAccountCircleOutline,
} from "@mdi/js"

export const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: mdiHomeOutline },
  { name: "About", href: "/about", icon: mdiInformationOutline },
  { name: "Team", href: "/team", icon: mdiAccountCircleOutline },
]

export interface NavItem {
  name: string
  href: string
  icon: string
}
