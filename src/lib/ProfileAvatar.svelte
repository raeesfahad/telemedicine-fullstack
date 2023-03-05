<script>
    import {Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider} from 'flowbite-svelte'

     import { user } from '../store';

  </script>
  
    <Avatar id="user-drop" size="sm" src={$user.image}>
    <Dropdown triggeredBy="#user-drop">
      <DropdownHeader>
        <span class="block text-sm"> {$user.first_name} {$user.last_name}</span>
        <span class="block truncate text-sm font-medium"> {$user.email}</span>
      </DropdownHeader>
      <DropdownItem>Settings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
    
    </Avatar>