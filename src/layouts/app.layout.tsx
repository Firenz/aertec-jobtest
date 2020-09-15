import * as React from 'react';
import { CssBaseline } from '@material-ui/core';
import { FooterComponent } from 'common-app/components';

interface Props {
  children: any;
}

export const AppLayout: React.FC<Props> = (props: Props) => {
  return (
    <CssBaseline>
      {props.children}
      <FooterComponent />
    </CssBaseline>
  );
};
