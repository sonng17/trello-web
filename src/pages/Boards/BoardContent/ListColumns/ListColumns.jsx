import { Box, Button, TextField } from '@mui/material'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { toast } from 'react-toastify'

function ListColumns({ columns, createNewColumn, createNewCard, deleteColumnDetails, deleteCardDetails }) {
  // SortableConText yêu cầu items là 1 mảng dạng ['id-1', 'id-2'] chứ kp {id: 'id-1'}
  // Nếu không đúng thì vẫn có thể kéo thả nhưng k có animation

  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)
  const [newColumnTitle, setNewColumnTitle] = useState('')
  const addNewColumn = () => {
    if (!newColumnTitle) {
      toast.error('Please enter column title !')
      return
    }

    //Tao du lieu Column de goi API
    const newColumnData = {
      title: newColumnTitle,
    }
    //Goi API o day
    createNewColumn(newColumnData)
    //Dong trang thai them Column moi va Clear input
    toggleOpenNewColumnForm()
    setNewColumnTitle('')
  }
  return (
    <SortableContext items={columns?.map(column => column._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': { m: 2 },
        }}
      >
        {columns?.map(column => (
          <Column key={column._id} column={column} createNewCard={createNewCard} deleteColumnDetails={deleteColumnDetails} deleteCardDetails={deleteCardDetails} />
        ))}
        {/* Box Add new column CTA */}
        {!openNewColumnForm ? (
          <Box
            onClick={toggleOpenNewColumnForm}
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d',
            }}
          >
            <Button
              sx={{
                color: 'white',
                width: '100%',
                justifyContent: 'flex-start',
                pl: 2.5,
                py: 1,
              }}
              startIcon={<NoteAddIcon />}
            >
              Add new column
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              p: 1,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <TextField
              value={newColumnTitle}
              onChange={e => setNewColumnTitle(e.target.value)}
              sx={{
                '& label': { color: 'white' },
                '& input': { color: 'white' },
                '& label.Mui-focused': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
              label="Enter column title..."
              type="text"
              size="small"
              variant="outlined"
              autoFocus
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                onClick={addNewColumn}
                variant="contained"
                color="success"
                size="small"
                sx={{
                  boxShadow: 'none',
                  border: '0.5px solid',
                  borderColor: theme => theme.palette.success.main,
                  '&:hover': {
                    bgcolor: theme => theme.palette.success.main,
                  },
                }}
              >
                Add Column
              </Button>
              <CloseIcon
                onClick={toggleOpenNewColumnForm}
                fontSize="small"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': {
                    color: theme => theme.palette.warning.light,
                  },
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}

export default ListColumns
