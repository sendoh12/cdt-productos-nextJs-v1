import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Grid } from '@mui/material';
import ProductoDetalle from '@src/componentes/mostrarDetalle/ProductoDetalle';

const DetalleProduct: NextPage = () => {
  return (
    <div style={{ paddingInline: 200 }}>
      <Grid item container style={{ marginTop: '2%', border: '1px solid grey' }}>
        <ProductoDetalle />
      </Grid>
    </div>
  );
};

export default DetalleProduct;
