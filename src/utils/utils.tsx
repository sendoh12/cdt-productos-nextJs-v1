import { Skeleton, SkeletonProps } from '@mui/material';
import React, { ReactElement, cloneElement } from 'react';
import NumberFormat from 'react-number-format';
import { ClienteUnico } from '../interface/busquedaCliente';

/**
 * Generador de clones de elementos
 * @param element ReacyElement
 * @param elements Number
 * @returns ReactElement Array
 */
export function generate(element: ReactElement, elements: number): ReactElement[] {
  const arrayElements: number[] = [];
  for (let index = 0; index < elements; index += 1) {
    arrayElements.push(index);
  }
  return arrayElements.map((value) => cloneElement(element, {
    key: value,
  }));
}

/**
 * Formato de visualización del número de cliente uníco
 * @param clienteUnico ClienteUnico
 * @returns String
 */
export function formatClienteUnico(clienteUnico: ClienteUnico): string {
  const idPais = `0${clienteUnico?.idPais.toString()}`.slice(-2);
  const idCanal = `0${clienteUnico?.idCanal.toString()}`.slice(-2);
  const idSucursal = `000${clienteUnico?.idSucursal.toString()}`.slice(-4);
  return `${idPais}${idCanal} ${idSucursal} ${clienteUnico?.idFolio}`;
}

interface CurrentTarget {
  name: string;
  value: string;
}

interface Event {
  currentTarget: CurrentTarget;
}

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: Event) => void;
  name: string;
}

/**
 * Transformación del input a formato de moneda
 * @param props NumberFormatCustomProps
 * @returns ReactComponent
 */
export function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          currentTarget: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      allowNegative={false}
    />
  );
}

interface Pending {
  isPending: boolean;
}

type SkeletonLoadingProps = SkeletonProps & Pending;

export function SkeletonLoading({
  isPending,
  children,
  ...rest
}: React.PropsWithChildren<SkeletonLoadingProps>): React.ReactElement {
  if (isPending) {
    return <Skeleton {...rest} />;
  }
  return <>{children}</>;
}
