import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container } from './styles';

const ModalPlaceholder: React.FC = () => {
  return (
    <Container>
      <Skeleton width={360} height={349} />

      <aside>

        <div>
          <Skeleton width={312} height={30} />


          <Skeleton width={80} height={35} />
        </div>
        <Skeleton width={312} height={50} />
      </aside>
    </Container>
  );
}

export default ModalPlaceholder;
