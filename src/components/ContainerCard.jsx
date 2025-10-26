export default function ContainerCard({ children, className = "" }) {
  return (
    <div className={`w-full max-w-md mx-auto mt-20 p-8 bg-white shadow-lg rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
