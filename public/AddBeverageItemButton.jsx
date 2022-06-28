import { Fab } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { useState } from 'react'
import BeverageDialog from './pages/BeverageDialog'

export default function AddBeverageItemButton({ onAfterSubmit }) {

const [isOpen, setIsOpen] = useState(false)

const open = () => setIsOpen(true)

return (
    <>
    <Fab
        color="secondary"
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        onClick={open}
    >
        <AddIcon />
    </Fab>
    <BeverageItemEditor
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onAfterSubmit={onAfterSubmit}
    />
    </>
)
}