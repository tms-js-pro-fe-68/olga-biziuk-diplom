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