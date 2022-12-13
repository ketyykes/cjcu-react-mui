import React, { useEffect, useState } from 'react'

import { List, ListItem, IconButton, ListItemText, TextField, Box } from '@mui/material';
import { TaskAlt as TaskAltIcon, Delete as DeleteIcon } from '@mui/icons-material'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Content from '../components/Content/Content'

import { instance } from "../API/instanceAPI"

const FavoritePage = () => {
  const [favorite, setFavorite] = useState([]);
  const [inputFavorite, setInputFavorite] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get('/favorites')
        setFavorite(data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  const newFavoriteHandler = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const posetResponse = await instance.post('/favorites', {
          id: Date.now(),
          "title": inputFavorite,
          "finished": false
        })
        console.log(posetResponse);
        const { data } = await instance.get('/favorites')
        setFavorite(data)
      } catch (error) {
        console.log(error);
      }
    })();
    setInputFavorite('');
  }

  const finishedHandler = (id, title, finished) => {
    (async () => {
      try {
        const putResponse = await instance.put(`/favorites/${id}`, {
          id,
          title,
          finished: !finished
        })
        console.log(putResponse);
        const { data } = await instance.get('/favorites')
        setFavorite(data)
      } catch (error) {
        console.log(error);
      }
    })();
  }

  const deleteHandler = (id) => {
    (async () => {
      try {
        const deleteResponse = await instance.delete(`/favorites/${id}`)
        console.log(deleteResponse);
        const { data } = await instance.get('/favorites')
        setFavorite(data)
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <>
      <Header />
      <Content>
        <Box sx={{ boxShadow: 1, maxWidth: "600px", margin: "0 auto", p: 6, }}>
          <Box onSubmit={newFavoriteHandler} component="form" noValidate
            autoComplete="off">
            <TextField
              value={inputFavorite}
              fullWidth={true}
              label="輸入待看清單"
              variant="filled"
              onChange={
                (e) => { setInputFavorite(e.target.value) }
              }
            />
          </Box>
          <List>
            {favorite.map(({ title, id, finished }) => {
              return (<ListItem key={id}>
                <ListItemText
                  primary={title}
                  sx={{ textDecoration: finished ? "line-through" : "none" }}
                />
                <IconButton
                  sx={{ m: 1 }}
                  edge="end"
                  aria-label="TaskAltIcon"
                  onClick={() => (finishedHandler(id, title, finished))}>
                  <TaskAltIcon />
                </IconButton>
                <IconButton
                  sx={{ m: 1 }}
                  edge="end"
                  aria-label="delete"
                  onClick={() => (deleteHandler(id))}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>)
            })}
          </List>
        </Box>
      </Content>
      <Footer />
    </>
  )
}

export default FavoritePage