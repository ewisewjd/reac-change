import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';

const cctvdata=(props) =>{
    const[data, setData]=useState([]);
    
    useEffect(() => {
        const apiCall = async () =>  {
          const response = await axios.get(); 
          setData(response.data.payload);
        };
        apiCall();
      }, [])

}

  console.log(data);
  
 

export default cctvdata;
