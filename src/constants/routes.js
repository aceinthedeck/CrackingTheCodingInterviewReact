import CheckPermutation from '../components/chapter1/checkPermutation';

const ROUTES = [
    {
        path:"/",
        exact: true,
        component:'home'
    },
    {
        path:"/checkpermutation",
        component:{CheckPermutation}
    }
]