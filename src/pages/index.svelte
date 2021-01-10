<script lang="ts">
  import { metatags } from "@roxi/routify"
  import {
    Button,
    AppBar,
    Icon,
    NavigationDrawer,
    List,
    ListItem,
    Row,
    Col,
    Container,
  } from "svelte-materialify"
  import { mdiMenu, mdiCloudDownloadOutline } from "@mdi/js"
  import { navItems } from "../data"
  import { goto } from "@roxi/routify"

  metatags.title = "RetardOS"
  metatags.description = "RetardOS Official Website"

  let navOpen = true

  function toggleNav() {
    navOpen = !navOpen
  }
</script>

<AppBar>
  <div slot="icon">
    <Button fab depressed on:click={toggleNav}>
      <Icon path={mdiMenu} />
    </Button>
  </div>
  <span slot="title">RetardOS</span>
  <div style="flex-grow:1" />
  <Button fab depressed>
    <Icon path={mdiCloudDownloadOutline} />
  </Button>
</AppBar>

<Row noGutters style="min-height:100vh">
  <NavigationDrawer active={navOpen} style="min-height:100vh">
    <List>
      {#each navItems as item}
        <ListItem on:click={() => $goto(item.href)}>
          <span slot="prepend">
            <Icon path={item.icon} />
          </span>
          {item.name}
        </ListItem>
      {/each}
    </List>
  </NavigationDrawer>

  <Col class="center">
    <h5 class="mono" style="margin-top:4rem">RetardOS ROM</h5>
    <p class="mt-3">Retardation Reimagined.</p>
  </Col>
</Row>
