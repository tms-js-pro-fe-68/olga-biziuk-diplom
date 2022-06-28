import { useState } from 'react'
import {
Badge,
Box,
Card,
CardActions,
CardContent,
CardMedia,
IconButton,
Stack,
Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import {
    Favorite as FavoriteIcon,
    Share as ShareIcon,
} from '@mui/icons-material'
import AppBar from '../../components/AppBar'
import Page from '../../components/Page'
import { useBeverageGet } from './query/beverages'
import CartButton from './CartButton'
import { useAppContext } from '../../components/AppContext'
import ClickBoundary from '../../components/ClickBoundary'
import BeverageDialog from './BeverageDialog'

export default function BeveragePage() {
const { data: beverages = [] } = useBeverageGet()

const { cart } = useAppContext()

const [isOpen, setIsOpen] = useState(false)

return (
    <Page>
        <AppBar title="Products" />
        <button type="button" onClick={() => setIsOpen(true)}>
            add
        </button>
        <BeverageDialog open={isOpen} onClose={() => setIsOpen(false)} />
        <Box
            sx={{
                p: 2,
                display: 'grid',
                gap: 2,
                width: 1,
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                },
                color: 'white',
            }}
        >
            {beverages.map(beverage => (
                <Link key={beverage.id} to={`/beverages/${beverage.id}`}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={beverage.imageUrl}
                            alt="Капучино" />
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="subtitle1" color="text.secondary">
                                    {beverage.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    BYN {beverage.price}
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                {beverage.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        <ClickBoundary>
                            <IconButton aria-label="add to favorites">
                                <Badge badgeContent={beverage.likesCount} color="primary">
                                    <FavoriteIcon
                                        sx={{ color: beverage.likesCount ? 'red' : undefined }} 
                                        />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <BeveragePageOrderAction id={beverage.id} />
                        </ClickBoundary>
                    </CardActions>
                </Card>
            </Link>
        ))}
    </Box>
    <CartButton />
    {JSON.stringify(cart)}
    </Page>
    )
}