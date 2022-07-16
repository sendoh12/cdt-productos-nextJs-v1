import React, { useState } from 'react';
import JSEncrypt from 'jsencrypt';
import { LlavesSeguridad } from '@src/interface/seguridad';

export const SeguridadService = () => {
  const [token, setToken] = useState<string>('');
  const encrypt = new JSEncrypt();
  const [llaveSeguridad, setLlaveSeguridad] = useState<LlavesSeguridad>();
};
