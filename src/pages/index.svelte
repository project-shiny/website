<script lang="ts">
  import { metatags } from "@roxi/routify"
  import { Button, AppBar, Icon } from "svelte-materialify"
  import { mdiMenu, mdiCloudDownloadOutline } from "@mdi/js"

  metatags.title = "RetardOS"
  metatags.description = "RetardOS Official Website"
</script>

<AppBar>
  <div slot="icon">
    <Button fab depressed>
      <Icon path={mdiMenu} />
    </Button>
  </div>
  <span slot="title">RetardOS</span>
  <div style="flex-grow:1" />
  <Button fab depressed>
    <Icon path={mdiCloudDownloadOutline} />
  </Button>
</AppBar>
