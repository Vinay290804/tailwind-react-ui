import Header from './components/Header';
import InfoCard from './components/InfoCard';
import UserList from './components/UserList';
import Footer from './components/Footer';

function App() {
  const userInfo = {
    name: "Vinay",
    role: "Intern",
    skills: ["React", "Node.js", "MongoDB"]
  };

  return (
    <div className="p-4 space-y-6 bg-gray-100 min-h-screen">
      <Header title="Intern Dashboard" />
      <InfoCard name={userInfo.name} role={userInfo.role} />
      <UserList skills={userInfo.skills} />
      <Footer />
    </div>
  );
}

export default App;