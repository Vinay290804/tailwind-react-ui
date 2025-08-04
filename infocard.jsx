function InfoCard({ name, role }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">User Info</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
}

export default InfoCard;