<script>
    import { Card, ToolbarButton, Dropdown, DropdownItem, Avatar, Button } from "flowbite-svelte";
  </script>
  <Card padding='sm'>
    <div class="flex justify-end">
      <ToolbarButton class="dots-menu text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
      </ToolbarButton>
      <Dropdown class="w-36" triggeredBy=".dots-menu">
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Export data</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </Dropdown>
    </div>
    <div class="flex flex-col items-center pb-4">
      <Avatar size="lg" src="/images/profile-picture-3.webp" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
          <Button>Add friend</Button>
          <Button color="light" class="dark:text-white">Message</Button>
        </div>
    </div>
  </Card>