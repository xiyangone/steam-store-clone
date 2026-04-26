import { SteamHomePage } from '../features/steam-home/SteamHomePage';
import { PendingLinkPage } from './PendingLinkPage';
import { getAppPathname } from './navigation';

export default function App() {
  return getAppPathname(window.location.pathname) === '/pending-link' ? (
    <PendingLinkPage />
  ) : (
    <SteamHomePage />
  );
}
