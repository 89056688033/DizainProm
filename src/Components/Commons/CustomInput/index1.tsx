import React, { useState } from 'react';

interface IProps {
  value: string;
  fieldLabel: string;
  fieldName: string;
  type?: React.HTMLInputTypeAttribute;
  handleChangeFieldForm: (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Component = ({ value, fieldLabel, fieldName, type, handleChangeFieldForm }: IProps) => {
  console.log('render', fieldLabel);
  return (
    <div style={{ display: 'grid' }}>
      <span>{fieldLabel}</span>
      <input value={value} type={type} onChange={handleChangeFieldForm(fieldName)} />
    </div>
  );
};

export const CustomInput = React.memo(Component);
