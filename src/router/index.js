import hello from "../components/view/hello"
import single from '../components/view/singleProduct'
import product from '../components/view/product'
export const routes= [
    {
      path: '',
      component: product
    },
    {
        path: '/items/:id',
        component: single
    }
]