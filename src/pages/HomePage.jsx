import React from 'react'

import { Grid } from "@mui/material"
import { useLoaderData } from "react-router-dom";

import Content from '../components/Content/Content'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MovieCard from '../components/MovieCard/MovieCard'

const HomePage = () => {
  const { data: { results: popularMovies } = {} } = useLoaderData();
  return (
    <>
      <Header>
      </Header>
      <Content >
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {
            popularMovies.map(({ overview, title, backdrop_path }, index) => (
              <Grid item xs={12} lg={4} xl={3} md={6} sm={6} key={index}>
                <MovieCard overview={overview} title={title} backdrop_path={backdrop_path} />
              </Grid>
            ))
          }
        </Grid>
      </Content>
      <Footer />
    </>
  )
}

export default HomePage