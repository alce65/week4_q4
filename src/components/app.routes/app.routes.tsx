import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Todo = lazy(() => import('../../pages/todo/todo'));
const Home = lazy(() => import('../../pages/home/home'));
const About = lazy(() => import('../../pages/about/about'));
const Gents = lazy(() => import('../../gentelmen/pages/gentlemen'));
const Products = lazy(() => import('../../pages/products/products'));
const Phone = lazy(() => import('../../phone/pages/phone'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/todo" element={<Todo></Todo>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/gents" element={<Gents></Gents>}></Route>
          <Route path="/phone" element={<Phone></Phone>}></Route>
          <Route path="*" element={<Navigate to={'/'}></Navigate>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
