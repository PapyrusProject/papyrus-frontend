'use client'
import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const FeatureIcon = styled(FaCheckCircle)`
  color: ${blue[500]};
  margin-right: 10px;
`;

function About() {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px', background: `linear-gradient(45deg, ${blue[500]} 30%, ${blue[300]} 90%)` }}>
        <Typography variant="h4" align="center" color="white">
          Sobre o Papyrus
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="body1">
          O Papyrus é um projeto inovador que oferece uma plataforma de bloco de notas simples e fácil de usar.
        </Typography>
        <Typography variant="h6">Características</Typography>
        <Box>
          <FeatureItem>
            <FeatureIcon />
            <Typography variant="body1">Interface amigável</Typography>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon />
            <Typography variant="body1">Sincronização em vários dispositivos</Typography>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon />
            <Typography variant="body1">Opções de personalização</Typography>
          </FeatureItem>
        </Box>
        <Typography variant="h6">Nossa Missão</Typography>
        <Typography variant="body1">
          Nossa missão é fornecer uma ferramenta de anotações eficiente e acessível que ajude as pessoas a organizar suas ideias e tarefas diárias.
        </Typography>
        <Typography variant="h6">Contato</Typography>
        <Typography variant="body1">
          Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para nos contatar em:{' '}
          <a href="mailto:support@papyrus.com" style={{ color: blue[500] }}>support@papyrus.com</a>
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;
