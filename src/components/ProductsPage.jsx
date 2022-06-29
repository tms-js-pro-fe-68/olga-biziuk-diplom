import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Stack,
    Typography
} from '@mui/material'
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@mui/icons-material'
import { useState } from 'react'

const productsList = [
    {
        name: 'Эспрессо',
        description: 'Напиток, для получения которого горячую воду под высоким давлением пропускают через фильтр с молотым кофе',
        price: '3',
        image: 'https://cdn.lifehacker.ru/wp-content/uploads/2017/04/espresso-beanscoffee-ru_1493285939-630x316.jpg',
    },
    {
        name: 'Капучино',
        description: 'Эспрессо с горячим молоком, верхний слой которого взбит в ровную глянцевую пену',
        price: '4',
        image: 'https://cdn.lifehacker.ru/wp-content/uploads/2017/04/latte-youtube-com_1493285979-630x315.jpg',
    },
    {
        name: 'Моккачино',
        description: 'Разновидность латте, включающая дополнительный ингредиент — шоколад',
        price: '5',
        image: 'https://cdn.lifehacker.ru/wp-content/uploads/2017/04/mokkachino-kivahan.ru__1493286240-630x316.jpg',
    },
    {
        name: 'Гляссе',
        description: 'Кофе с мороженым',
        price: '6',
        image: 'https://cdn.lifehacker.ru/wp-content/uploads/2017/04/glyasse-chefcuisto-com_1493286009-e1494846822611-630x317.jpg',
    },
    {
        name: 'Кофе по-венски'
        description: 'Кофе с кофе по-венски — это кофе и взбитые сливки',
        price: '7'
        image: 'https://cdn.lifehacker.ru/wp-content/uploads/2017/04/coffee-vienna_1493286038-e1494846877193-630x313.jpg',     
    },
    {
        name: 'Кофе по-ирландски'
        description: 'Кофе, сливки, коричневый сахар и ирландский виски',
        price: '8'
        image: 'https://cdn.lifehacker.ru/wp-content/uploads/2017/04/Irish-Coffee-31-thespiceapron-com_1493286106-e1494846917217-630x318.jpg',      
    },

]

export function OrderAction() {
    const [count, setCount] = useState(0)

    return (
        <Box ml="auto">
            {count === 0 && (
                <Button variant='contained' onClick={() => setCount(c => c + 1)}>
                    Заказать напиток
                </Button>
            )}
            {count > 0 && (
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => setCount(c => c - 1)}>-</Button>
                    <Button>{count}</Button>
                    <Button onClick={() => setCount(c => c + 1)}>+</Button>
                </ButtonGroup>
            )}
        </Box>
    )
}


export default function ProductsPage() {

    return (


        <Box
            sx={{
                p: 2,
                display: 'grid',
                gap: 2,
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(6, 1fr)",
                },
            }}
        >
            {productsList.map((item) => (
                <Card sx={{ maxWidth: 250, height: 350 }}
                >
                    <CardMedia
                        component="img"
                        height="170"
                        image={item.image}
                        alt="Paella dish"
                    />
                    <CardContent >
                        <Stack direction='row' justifyContent='space-between' >
                            <Typography variant="body1"  >
                                {item.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" sx={{ fontWeight: 'bold' }} >
                                {item.price}$
                            </Typography>
                        </Stack>
                        <Typography variant="body1" color="textSecondary" >
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <OrderAction />
                    </CardActions>
                </Card>
            ))}
        </Box>

    )
}