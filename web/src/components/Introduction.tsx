import * as React from 'react'
import { Box, Container, Card, Typography } from '@mui/material'
import { Link } from 'gatsby'

const Introduction = () => {
  return (
    <Box>
      <Container>
        <Card >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}

export default Introduction
