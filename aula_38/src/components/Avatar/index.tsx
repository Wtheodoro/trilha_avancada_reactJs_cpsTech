import React from 'react';
import { AvatarType } from '../../types/allTypes';

const Avatar = (props: AvatarType) => {
  return (
      <img src={props.url} alt="Avatar" data-testid="img"/>
  );
};

export default Avatar;
