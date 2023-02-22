import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { HomePage } from "./pages/Home";
import { SpellsPage } from "./pages/Spells";
import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { ContextProvider } from "./utils";

const DetailsPage = React.lazy(() => import("./pages/Details"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingOutlined />}>
        <ContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/spells" element={<SpellsPage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
            </Route>
          </Routes>
        </ContextProvider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
