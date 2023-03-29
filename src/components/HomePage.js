import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Student DashBoard</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/login" style={{ marginRight: '20px' }}>Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
