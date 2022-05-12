import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';
import CertificationsPage from './pages/CertificationsPage';
import TalksPage from './pages/TalksPage';
import Navbar from './components/Navbar';

export const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Route path="/certifications">
          <CertificationsPage />
        </Route>
        <Route path="/talks">
          <TalksPage />
        </Route>
      </Switch>
    </Router>
  );
};
