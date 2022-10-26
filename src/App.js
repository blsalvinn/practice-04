
import './App.css';
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import {useAuthSlice} from './redux/hooks'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {privateRoutes, publicRoutes } from './router'
import { EmptyLayout, ProtectedRouter } from './components';
import { GetCode, Login, VerifyCode } from './pages';
import Register from './pages/Register';

function App() {

  // const userInfo = {
  //   userName: 'tuan leo',
  //   userId: '507f1f77bcf86cd799439011',
  //   createdAt: new Date().toLocaleDateString(),
  //   avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000'
  // }

  const dispatch = useDispatch()

  const [user, authActions] = useAuthSlice()


  return (
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout
              const Component = route.component
              return <Route key={index} path={route.path} element={
                  <Layout>
                    <Component/>
                  </Layout>
              } />
            })}
          <Route element={<ProtectedRouter Element={user?.token ? <Outlet/> : <Navigate to={`/login`}/>}/>}>
            {privateRoutes.map((route, index) => {
              const Layout = route.layout
              const Component = route.component
              return <Route key={index} path={route.path} element={
                  <Layout>
                    <Component/>
                  </Layout>
              } />
            })}
        </Route>
        <Route element={<ProtectedRouter Element={user?.token ? <Navigate to={`/home`}/> :  <Outlet/>}/>}>
            <Route path='/login' element={<EmptyLayout><Login/></EmptyLayout>}/>
            <Route path='/register' element={<EmptyLayout><Register/></EmptyLayout>}/>
            <Route path='/verify_code' element={<EmptyLayout><VerifyCode/></EmptyLayout>}/>
            <Route path='/get_code' element={<EmptyLayout><GetCode/></EmptyLayout>}/>
        </Route>
      </Routes>
  );
}

export default App;
