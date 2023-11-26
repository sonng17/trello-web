import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterIcon from '@mui/icons-material/Filter'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main',
  },
  '&:hover': {
    backgroundColor: 'primary.50',
  },
}

function BoardBar() {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.dark',
        width: '100%',
        height: theme => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5',
        paddingX: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={MENU_STYLES} clickable icon={<DashboardIcon />} label="Trello MERN" />
        <Chip sx={MENU_STYLES} clickable icon={<VpnLockIcon />} label="Public/Private Workspace" />
        <Chip sx={MENU_STYLES} clickable icon={<AddToDriveIcon />} label="Add to Google Drive" />
        <Chip sx={MENU_STYLES} clickable icon={<BoltIcon />} label="Automation" />
        <Chip sx={MENU_STYLES} clickable icon={<FilterIcon />} label="Automation" />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>
          Invite
        </Button>
        <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 34, height: 34, fontSize: 16 } }}>
          <Tooltip title="Trellodev">
            <Avatar alt="Son" src="https://avatars.githubusercontent.com/u/103430853?v=4" />
          </Tooltip>
          <Tooltip title="Trellodev">
            <Avatar alt="Son" src="https://avatars.githubusercontent.com/u/103430853?v=4" />
          </Tooltip>
          <Tooltip title="Trellodev">
            <Avatar alt="Son" src="https://avatars.githubusercontent.com/u/103430853?v=4" />
          </Tooltip>
          <Tooltip title="Trellodev">
            <Avatar alt="Son" src="https://avatars.githubusercontent.com/u/103430853?v=4" />
          </Tooltip>
          <Tooltip title="Trellodev">
            <Avatar alt="Son" src="https://avatars.githubusercontent.com/u/103430853?v=4" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
