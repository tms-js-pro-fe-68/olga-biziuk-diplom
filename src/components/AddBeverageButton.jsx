import { Fab } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { useState } from 'react'
import BeverageDialog from '.pages/BeverageDialog'

export default function AddBeverageButton() {

const [isOpen, setIsOpen] = useState(false)

const open = () => setIsOpen(true)

return (
    <>
    <Button type="button" variant="contained" onClick={open}>
        Заказать напиток
    </Button>
    
    <BeverageDialog
    open={isOpen}
        onClose={() => setIsOpen(false)}
    />
    </>
)
}