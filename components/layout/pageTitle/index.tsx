import Link from 'next/link';
import React from 'react';
import backArrow from 'assets/icons/backArrow.svg';
import Image from 'next/image';
import { Container } from './style';

type TPageTitleProps = {
  pageTitle: string;
};

const PageTitle = ({ pageTitle }: TPageTitleProps) => {
  return (
    <>
      <Container>
        <Link href={`/${pageTitle}`}>
          <div className="page__title">
            <div>
              <Image src={backArrow} alt="Back arrow" width={9} height={14} />
            </div>
            <span>{pageTitle}</span>
          </div>
        </Link>
      </Container>
    </>
  );
};

export default PageTitle;
