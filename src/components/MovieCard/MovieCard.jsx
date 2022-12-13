import React from 'react'

import { Card, CardContent, CardMedia, Typography } from "@mui/material"

const MovieCard = ({ overview, title, backdrop_path }) => {
  return (
    <Card key={title} sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview || "暫無說明"}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MovieCard