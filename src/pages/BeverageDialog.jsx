import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Box,
} from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { object, string, number } from 'yup'
import FormikTextField from '../components/TextField'


export default function BeverageDialog({
    title,
    text,
    onClose,
    onConfirm,
    ...otherProps
}) {
    const queryClient = useQueryClient()
    // состояние для файла
    const [image, setImage] = useState(null)

    const handleSubmit = async (values, { setSubmitting }) => {
      // 1 POST запрос на создание ресурса
    const { data } = await api.post('/beverage', values)

      // 2 POST запрос с формой в которую добавлен файл
    const resource = 'beverage' // не забудьте поменять
    const formData = new FormData()
    formData.append('image', image)
    const { data: imageUrl } = await axios.post(
        'https://server.kemalkalandarov.lol/api/images',
        formData,
        { params: { resource, id: data.id } }, //
    )

      // 3 PUT обновление только что созданного ресурса, запись url картинки
    await api.put(`/beverage/${data.id}`, { imageUrl })

      // 4 обновить список ресурсов чтобы отобразился только что созданный,
      // у вас реализация может отличаться, у меня пиццы в raect query, по этому
      // вызываю ф-ю очистки кеша с react query
    queryClient.invalidateQueries('beverage')

    setSubmitting(false)
    onClose()
    }

    const formik = useFormik({
    initialValues: {
        name: '',
        description: '',
        price: 0,
    },
    onSubmit: handleSubmit,
    validationSchema: object().shape({
        name: string().required(),
        description: string(),
        price: number().min(20),
    }),
    validateOnMount: true,
    })

    const [imagePreview, setImagePreview] = useState('')
    useEffect(() => {
    const reader = new FileReader()
    reader.onload = e => setImagePreview(e.target.result)

    if (image) {
        reader.readAsDataURL(image)
    }
      // чистим onload чтобы не сработал setImagePreview когда компонент анмаунтится
    return () => {
        reader.onload = undefined
    }
    }, [image])

    return (
    <Dialog {...{ onClose, ...otherProps }}>
        <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Добавить напиток</DialogTitle>
        <DialogContent>
            <Box
            sx={{
                p: 2,
                display: 'grid',
                gap: 2,
                gridTemplateColumns: '1fr 1fr',
            }}
            >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormikTextField
                autoComplete="off"
                label="Name"
                name="name"
                formik={formik}
                sx={{ mb: 2 }}
                />
                <FormikTextField
                label="Description"
                type="description"
                name="description"
                formik={formik}
                sx={{ mb: 2 }}
                />
                <FormikTextField
                label="Price"
                type="number"
                name="price"
                formik={formik}
                sx={{ mb: 2 }}
                />
            </Box>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                  // justifyContent: 'center',
                alignItems: 'center',
                }}
            >
                <Box
                component="img"
                src={imagePreview}
                width="150px"
                height="150px"
                sx={{ mb: 2 }}
                />
                <input
                name="image"
                type="file"
                  // value тут не нужен, достаточно сетить выбранную картинку в стейт image (uncontrolled)
                onChange={e => setImage(e.target.files[0])}
                />
            </Box>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" autoFocus>
            Добавить
            </Button>
        </DialogActions>
        </form>
    </Dialog>
    )
}