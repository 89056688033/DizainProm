import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './Components/Commons/Layouts';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import { PostsPage } from './Containers/PostsPage';
import { ProductsPage } from './Containers/ProductsPage';
import { routes } from './utils/constants/routes';
import { AuthPage } from './Containers/AuthPage';
import { CheckAuth } from './Components/Commons/CheckAuth';
import { CoursePage } from './Containers/CoursePage/Course';
import { UsersPage } from './Containers/UsersPage';
import { UserPage } from './Containers/UserPage';

// export const AppContext = createContext({ theme: 'light' });
// context
function App() {
  return (
    // <AppContext.Provider value={{ theme: 'light' }}>
    <div className={styles.wrapper}>
      <Layout>
        <Routes>
          <Route
            path={routes.MAIN}
            element={
              // <CheckAuth>
              <MainPage />
              // </CheckAuth>
            }
          />
          <Route path={routes.PRODUCTS} element={<ProductsPage />} />
          <Route path={routes.COURSE} element={<CoursePage />} />
          <Route path={routes.AUTH} element={<AuthPage />} />
          <Route path={routes.POSTS}>
            <Route element={<PostsPage />} index />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path={routes.USERS}>
            <Route element={<UsersPage />} index />
            <Route path=":id" element={<UserPage />} />
          </Route>
          <Route />
        </Routes>
      </Layout>
    </div>
    // </AppContext.Provider>
  );
}

export default App;
