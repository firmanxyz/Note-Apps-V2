import React, { useMemo, useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import ArchivePage from "./pages/ArchivePage";
import AddNewPage from "./pages/AddNewPage";
import DetaiPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LoginNavigation from "./components/LoginNavigation";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { FiLogOut } from "react-icons/fi";
import ContextTheme from "./contexts/ContextTheme";

function App() {
  const [authed, setAuthed] = React.useState(null);
  const [init, setInit] = useState(true);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const valueTheme = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  React.useEffect(() => {
    async function fetchWithData() {
      const { data } = await getUserLogged();
      setAuthed(data);
      setInit(false);
    }
    fetchWithData();
  }, []);

  async function onLoginSuccses({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthed(data);
  }
  function onLogout() {
    setAuthed(null);
    putAccessToken("");
  }

  if (init === true) {
    return;
  }

  if (authed === null) {
    return (
      <ContextTheme.Provider value={valueTheme}>
        <div className="app-container" data-theme={theme}>
          <header>
            <h1>
              <Link to="/">Aplikasi Catatan</Link>
            </h1>
            <LoginNavigation />
          </header>
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccses={onLoginSuccses} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </ContextTheme.Provider>
    );
  }

  return (
    <ContextTheme.Provider value={valueTheme}>
      <div className="app-container" data-theme={theme}>
        <header>
          <h1>
            <Link to="/">Aplikasi Catatan</Link>
          </h1>
          <Navigation />
          <LoginNavigation />
          <button className="button-logout" onClick={onLogout}>
            {authed.name}
            <FiLogOut />
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archives" element={<ArchivePage />} />
            <Route path="/add" element={<AddNewPage />} />
            <Route path="/notes/:idUrl" element={<DetaiPage />} />
          </Routes>
        </main>
      </div>
    </ContextTheme.Provider>
  );
}

export default App;
