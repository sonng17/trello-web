import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Card as MuiCard } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
          overflow: 'unset',
        }}
      >
        <CardContent
          sx={{
            p: 1.5,
            '&:last-child': { p: 1.5 },
          }}
        >
          <Typography>Card test 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }

  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset',
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/736x/f4/07/be/f407be82387d73dae8f84f00af4eb8bb.jpg"
        title="green iguana"
      />
      <CardContent
        sx={{
          p: 1.5,
          '&:last-child': { p: 1.5 },
        }}
      >
        <Typography>Trello MERN stack</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<CommentIcon />}>
          15
        </Button>
        <Button size="small" startIcon={<AttachmentIcon />}>
          10
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
