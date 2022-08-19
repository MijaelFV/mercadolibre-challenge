import type { NextPage } from 'next'
import { MainLayout } from '../components/layouts/mainLayout'

import { Product } from "../types/product";
import mock from "../mocks/mock";

interface Props {
  product?: Product;
}

const Detail: NextPage<Props> = ({product = mock.product}) => {
  return (
    <MainLayout title='Detail'>

    </MainLayout>
  )
}

export default Detail
