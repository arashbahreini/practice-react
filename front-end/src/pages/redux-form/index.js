import { useState } from 'react';
import AddEditDevice from '@/components/AddEditDevice';
import DeviceList from '@/components/DeviceList';

export default function ReduxForm() {
  return (
    <>
      <AddEditDevice />
      <DeviceList />
    </>
  );
}
